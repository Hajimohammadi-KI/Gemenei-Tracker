import urllib.request
import re

url = 'http://127.0.0.1:8000/index.html'
html = urllib.request.urlopen(url).read().decode('utf-8')

checks = {
    'title_ok': '<title>Gemenei Tracker | هوشمندی کد چندمخزنی</title>' in html,
    'route_count': html.count('day: '),
    'month8_option': '<option value="8">ماه ۸: آزمون‌های آماری و نگارش پایان‌نامه</option>' in html,
    'speech_modal': '<div class="modal-backdrop" id="speech-modal">' in html and 'id="modal-body-text"' in html,
    'task_area': '<ul class="task-list" id="tasks-render-area"></ul>' in html,
    'export_import': 'function exportData()' in html and 'function importData(e)' in html,
}

for name, value in checks.items():
    print(f'{name}={value}')

print('has_inline_style_markers=', '<style>' in html and '</style>' in html)
