#!/usr/bin/env python3
import os
import json
import uuid
import time
import cgi
import shutil
from pathlib import Path
from urllib.parse import urlparse
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

ROOT = Path.cwd()
NOTES_DIR = ROOT / 'notes'
NOTES_DIR.mkdir(parents=True, exist_ok=True)

class NotesHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def log_message(self, format, *args):
        return

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/upload':
            self.handle_upload()
            return
        if parsed.path == '/api/note':
            self.handle_note()
            return
        self.send_error(404, 'Not found')

    def do_GET(self):
        parsed = urlparse(self.path)
        if parsed.path == '/api/list-notes':
            self.handle_list_notes()
            return
        if parsed.path == '/api/notes':
            self.handle_note_list()
            return
        return super().do_GET()

    def handle_note_list(self):
        try:
            notes = []
            for f in NOTES_DIR.glob('*.json'):
                try:
                    data = json.loads(f.read_text(encoding='utf-8'))
                    notes.append(data)
                except Exception:
                    pass
            payload = {'notes': notes}
            self.send_json(payload)
        except Exception as exc:
            self.send_json({'error': str(exc)}, status=500)

    def handle_list_notes(self):
        day = urlparse(self.path).query.split('day=')[-1] if 'day=' in urlparse(self.path).query else None
        records = []
        for f in NOTES_DIR.glob('*.json'):
            try:
                data = json.loads(f.read_text(encoding='utf-8'))
                if day and str(data.get('day')) != str(day):
                    continue
                records.append(data)
            except Exception:
                pass
        self.send_json({'notes': records})

    def handle_note(self):
        try:
            ctype = self.headers.get('Content-Type', '')
            if 'application/x-www-form-urlencoded' in ctype:
                raw = self.rfile.read(int(self.headers.get('Content-Length', '0')))
                raw_text = raw.decode('utf-8', errors='replace')
                values = dict([p.split('=', 1) for p in raw_text.split('&')])
                day = values.get('day', '')
                note = values.get('note', '')
                task = values.get('task', '')
                # save into a note stored nearest file
                record = {'day': day, 'task': task, 'note': note, 'updated_at': int(time.time()), 'files': []}
                file_path = NOTES_DIR / f'day_{day}_note.json'
                if file_path.exists():
                    try:
                        old = json.loads(file_path.read_text(encoding='utf-8'))
                        record['files'] = old.get('files', [])
                    except Exception:
                        pass
                file_path.write_text(json.dumps(record, ensure_ascii=False, indent=2), encoding='utf-8')
                self.send_json({'status': 'ok', 'saved': str(file_path)})
                return
            self.send_error(415, 'Expected form-encoded note data')
        except Exception as exc:
            self.send_json({'error': str(exc)}, status=500)

    def handle_upload(self):
        try:
            field_storage = cgi.FieldStorage(
                fp=self.rfile,
                headers=self.headers,
                environ={'REQUEST_METHOD': 'POST', 'CONTENT_TYPE': self.headers.get('Content-Type'), 'CONTENT_LENGTH': self.headers.get('Content-Length')}
            )
            day = field_storage.getvalue('day', '')
            task = field_storage.getvalue('task', '')
            note = field_storage.getvalue('note', '')
            uploaded = field_storage['file'] if 'file' in field_storage and field_storage['file'].filename else None

            record = {
                'day': day,
                'task': task,
                'note': note,
                'updated_at': int(time.time()),
                'files': []
            }

            # Load old record if any
            file_path = NOTES_DIR / f'day_{day}_note.json'
            if file_path.exists():
                try:
                    old = json.loads(file_path.read_text(encoding='utf-8'))
                    record['files'] = old.get('files', [])
                except Exception:
                    record['files'] = []

            # Save uploaded file with any extension and safe filename
            if uploaded is not None:
                original = os.path.basename(uploaded.filename)
                name, ext = os.path.splitext(original)
                safe_name = (name or 'upload').replace('..', '_')
                safe_ext = ext or '.bin'
                safe_file_name = f'day_{day}_{safe_name}_{uuid.uuid4().hex[:6]}{safe_ext}'
                out_path = NOTES_DIR / safe_file_name
                with open(out_path, 'wb') as f:
                    shutil.copyfileobj(uploaded.file, f)
                record['files'].append({'name': safe_file_name, 'original': original, 'path': str(out_path)})

            # Write note record file
            file_path.write_text(json.dumps(record, ensure_ascii=False, indent=2), encoding='utf-8')

            self.send_json({'status': 'ok', 'note': note, 'files': record['files'], 'saved': str(file_path)})
        except Exception as exc:
            self.send_json({'error': str(exc)}, status=500)

    def send_json(self, payload, status=200):
        body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

if __name__ == '__main__':
    NOTES_DIR.mkdir(parents=True, exist_ok=True)
    server = ThreadingHTTPServer(('127.0.0.1', 8000), NotesHandler)
    print('Gemenei Tracker notes server running on http://127.0.0.1:8000')
    server.serve_forever()
