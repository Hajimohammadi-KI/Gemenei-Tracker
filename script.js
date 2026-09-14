const milestoneDays = [
    {
        day: 1, month: 1,
        title: "فریز مخازن مرجع و استخراج رشته‌های اتصال",
        tasks: [
            "ایجاد شاخه research-baseline در DanpheEMR و DanpheSAAS",
            "استخراج و مستندسازی دقیق Commit Hash هر دو مخزن",
            "شناسایی رشته‌های اتصال به دیتابیس در appsettings.json"
        ],
        reference: "مستندات معماری مخزن DanpheEMR + بخش ۱ پروپوزال پژوهش",
        speech: "Today we initialize our empirical baseline for cross-repository intelligence. We formally freeze the specific Git commit hashes of DanpheEMR and DanpheSAAS to guarantee experimental reproducibility. Furthermore, we locate configuration anchors within application settings to trace shared relational database connections."
    },
    {
        day: 15, month: 1,
        title: "استقرار اولین برش عمودی دستی (C# to DB)",
        tasks: [
            "ردیابی فراخوانی یک متد در Patient Management تا اجرای SQL",
            "ثبت دستی تاپل شواهد شامل هش کامیت، شماره خطوط و متد SaveChanges",
            "تکمیل و اعتبارسنجی اولیه پروتکل امکان‌سنجی (Feasibility Protocol)"
        ],
        reference: "EF Core Model Configuration + بخش ۳ پروپوزال (مدل ۴ سطحی شواهد)",
        speech: "We complete our initial end-to-end vertical slice from C-Sharp Web APIs to the underlying SQL schema. By manually tracing a Patient Management service operation, we validate the four-tier evidence model and establish a solid baseline for subsequent automated compiler analysis."
    },
    {
        day: 31, month: 2,
        title: "طراحی اسکیمای چهارسطحی در گراف Neo4j",
        tasks: [
            "تعریف برچسب‌های Observation, EvidenceRecord, DerivedRelation, Claim",
            "اعمال قیدهای یکتایی روی CommitId, FilePath, LineSpan",
            "تست نمونه روابط READS_FROM و WRITES_TO در سایفر (Cypher)"
        ],
        reference: "Neo4j Schema Constraints Manual + بخش ۳ پروپوزال",
        speech: "Our objective today is formalizing the Neo4j property graph schema. We enforce strict uniqueness constraints across commit hashes and line intervals to prevent redundant nodes, cleanly separating physical source observations from derived relational statements."
    },
    {
        day: 45, month: 2,
        title: "تعریف ۵ قرارداد کوئری تحت پروتکل MCP",
        tasks: [
            "طراحی اسکیمای ورودی و خروجی قرارداد GetTableMutations",
            "پیاده‌سازی ساختار قرارداد GetProcedureDependencies",
            "اعمال سیاست انحصاری فقط‌خواندنی (Read-Only Governance)"
        ],
        reference: "Model Context Protocol Specification + بخش ۳ پروپوزال",
        speech: "We are defining five structured query contracts under the Model Context Protocol. The language model is architecturally restricted from issuing free-form Cypher commands, interacting strictly through validated read-only functions with fixed token limits."
    },
    {
        day: 61, month: 3,
        title: "توسعه پارسر رزلین بر مبنای CSharpSyntaxWalker",
        tasks: [
            "ایجاد پروژه رزلین و پیاده‌سازی کلاس پیمایشگر نحو",
            "ردیابی و استخراج متدهای موتاسیون (.Add, .Update, .Remove)",
            "ثبت اولیه توکن‌های شواهد موتاسیون و ذخیره‌سازی در حافظه"
        ],
        reference: "Microsoft.CodeAnalysis SDK Guide + بخش ۲ پروپوزال (RQ1a)",
        speech: "Today we construct our Roslyn-based syntactic extraction pipeline. By overriding abstract syntax walker methods, we capture method invocations on entity collections, extracting exact mutation tokens and physical source locations directly from source files."
    },
    {
        day: 75, month: 3,
        title: "پیاده‌سازی ارزیابی جزئی محلی برای کوئری‌های پویا",
        tasks: [
            "تحلیل و اتصال مقادیر ثابت رشته‌ای در کوئری‌های خام",
            "شناسایی نام جداول در متدهای FromSqlRaw بدون فرضیه‌سازی کاذب",
            "تخصیص برچسب PARTIALLY_SUPPORTED در صورت وجود ابهام پویا"
        ],
        reference: "Compiler Construction: Partial Evaluation + بخش ۳ پروپوزال",
        speech: "Dynamic SQL strings represent a persistent vulnerability in static code analysis. We implement local partial evaluation to resolve compile-time string constants, formally tagging any unresolved runtime expressions as ambiguous rather than generating assumptions."
    },
    {
        day: 91, month: 4,
        title: "پارس اسکریپت‌های T-SQL با Microsoft ScriptDom",
        tasks: [
            "پیکربندی TSql150Parser برای تحلیل فایل‌های دیتابیس",
            "استخراج گره‌های SelectStatement و DataModificationStatement",
            "تولید رکوردهای شواهد ارجاع به جداول و رویه‌های ذخیره‌شده"
        ],
        reference: "ScriptDom Architecture Guide + بخش ۳ و ۴ پروپوزال",
        speech: "We deploy Microsoft ScriptDom to parse Transact-SQL procedure definitions and schema scripts. By inspecting abstract syntax fragments, we extract physical table mutations and stored procedure identifiers deterministically, replacing fragile text search methods."
    },
    {
        day: 105, month: 4,
        title: "کاوش کاتالوگ متادیتا برای ردیابی تریگرها",
        tasks: [
            "استعلام وابستگی‌ها از sys.triggers و sys.sql_expression_dependencies",
            "تشکیل زنجیره شواهد سه‌گانه برای تغییرات آبشاری تریگرها",
            "برقراری پیوندهای چندمخزنی ناشی از تغییرات هم‌زمان دیتابیس"
        ],
        reference: "SQL Server System Catalog Mining Reference + بخش ۴ پروپوزال",
        speech: "Database triggers introduce indirect side effects across decoupled services. By mining system catalog dependencies, we capture multi-hop trigger firing chains, ensuring our evidence graph reflects cross-repository data mutations that lack source code links."
    },
    {
        day: 121, month: 5,
        title: "بارگذاری دسته‌ای شواهد به گراف Neo4j با الگوهای UNWIND",
        tasks: [
            "تجمیع خروجی‌های رزلین و ScriptDom در یک فایل استاندارد",
            "اجرای تراکنش‌های دسته‌ای Cypher UNWIND جهت تزریق به نئو۴جی",
            "بررسی صحت یکپارچگی ارجاعات و عدم وجود گره‌های سرگردان"
        ],
        reference: "Neo4j Operations Manual: High-Throughput Batch Ingestion",
        speech: "We execute high-throughput batch ingestion into our Neo4j instance. Using parameterized Cypher UNWIND operations, we instantiate tens of thousands of evidence records, constructing a unified structural topology across both target repositories."
    },
    {
        day: 135, month: 5,
        title: "پیاده‌سازی قوانین استنتاج روابط و ارزیابی RQ1b",
        tasks: [
            "فرمول‌بندی کوئری‌های استنتاج روابط READS_FROM و WRITES_TO",
            "سنجش دقت استنتاج در شرایط ایزوله Oracle با مشاهدات تاییدشده",
            "سنجش دقت در شرایط Pipeline بر روی خروجی واقعی فاز استخراج"
        ],
        reference: "پروپوزال بخش ۲ (طراحی آزمایش RQ1b) و بخش ۵ (گلد استاندارد)",
        speech: "Today we formalize our rule-based derivation logic. We evaluate relational inference performance across two conditions: the isolated oracle benchmark and the active compiler pipeline, strictly assessing rule quality independently from extraction noise."
    },
    {
        day: 151, month: 6,
        title: "راه‌اندازی سرور MCP و پروتکل تبادل زمینه",
        tasks: [
            "پیاده‌سازی سرور پروتکل زمینه مدل (MCP) با فرمت فشرده JSON",
            "اتصال پنج قرارداد کوئری به پایگاه داده Neo4j",
            "اعمال سقف توکن یکسان حداکثر ۲۰۰۰ توکن برای هر استعلام"
        ],
        reference: "Model Context Protocol Specifications + بخش ۳ پروپوزال",
        speech: "We deploy our custom Model Context Protocol server, exposing the frozen query contracts to LLM agents. Strict payload boundaries restrict context size to two thousand tokens, establishing an equitable baseline for our comparative retrieval benchmarks."
    },
    {
        day: 165, month: 6,
        title: "پیاده‌سازی اعتبارسنج قطعی و ارزیابی سناریوهای منفی سخت",
        tasks: [
            "کدنویسی منطق بررسی تاپل‌های اثباتی برای هر ادعای مدل",
            "تزریق تعمدی داده‌های Hard-Negative و سنجش مقاومت سیستم",
            "محاسبه نرخ رد اشتباه و تایید قرار داشتن زیر آستانه ۵ درصد"
        ],
        reference: "پروپوزال بخش ۴ (مشخصات اعتبارسنج قطعی) و بخش ۷ (آستانه خطا)",
        speech: "The deterministic validator acts as a non-generative symbolic post-processor. It verifies that every atomic claim returned by the language model logically entails from captured evidence IDs. Through hard-negative testing, we confirm harmful rejections remain well below five percent."
    },
    {
        day: 181, month: 7,
        title: "نهایی‌سازی گلد استاندارد ۶۰ سناریو و آزمون کاپای کوهن",
        tasks: [
            "تثبیت ۶۰ سناریوی واقعی در دادگان استاندارد طلایی",
            "حاشیه‌نویسی مستقل ۴۰ درصد از سناریوها توسط دو ارزیاب جداگانه",
            "محاسبه پایایی ارزیابان و احراز ضریب کاپای کوهن بالای 0.75"
        ],
        reference: "پروپوزال بخش ۵: پروتکل ارزیابی و ضریب کاپای کوهن K >= 0.75",
        speech: "Today we freeze our sixty-scenario gold standard benchmark. By conducting independent double-annotation over forty percent of the corpus, we confirm inter-annotator reliability exceeding a Cohen's Kappa of zero point seven five, eliminating annotator bias."
    },
    {
        day: 195, month: 7,
        title: "اجرای ارزیابی سرتاسری پایپ‌لاین در برابر BM25 و Vector",
        tasks: [
            "اجرای بازیابی با Contextual BM25 و Dense Vector Retrieval",
            "اجرای سیستم پیشنهادی CDCI تحت سقف توکن اکیداً برابر",
            "ثبت کامل نتایج و اندازه‌گیری بازخوانی مسیر و نرخ ادعاهای غلط"
        ],
        reference: "پروپوزال بخش ۲ (RQ2 و RQ3a) و بخش ۵ (شرایط آزمایش)",
        speech: "We conduct comparative retrieval evaluations under strictly unified context budgets. We contrast our CDCI pipeline directly against contextual BM25 and dense embeddings, measuring full path recall and verifying the reduction of unsupported technical assertions."
    },
    {
        day: 211, month: 8,
        title: "تحلیل آماری داده‌ها با آزمون رتبه‌دار ویلکاکسون",
        tasks: [
            "اجرای Paired Wilcoxon Signed-Rank Test روی داده‌های سناریوها",
            "محاسبه فواصل اطمینان و اثبات معناداری کاهش توهمات سیستم",
            "تایید آماری فرضیه ۱ و فرضیه ۲ در سطح معناداری مورد نظر"
        ],
        reference: "SciPy Statistical Methods Manual + بخش ۲ پروپوزال",
        speech: "We perform paired Wilcoxon signed-rank tests at the macro scenario level. This statistical design eliminates pseudo-replication bias, formally confirming that our deterministic validator achieves a statistically significant reduction in technical hallucinations."
    },
    {
        day: 240, month: 8,
        title: "بسته‌بندی Replicability Package و جمع‌بندی نهایی پایان‌نامه",
        tasks: [
            "آماده‌سازی مخزن تکرارپذیری شامل کدها، اسنپ‌شات‌ها و اسکریپت‌ها",
            "نهایی‌سازی فصول نتایج در سند اصلی تز در قالب LaTeX",
            "آماده‌سازی اسلایدهای دفاع و تمرین نهایی ارائه به زبان انگلیسی"
        ],
        reference: "دستورالعمل‌های استاندارد Artifact Review در ACM + بخش ۸ پروپوزال",
        speech: "Today marks the completion of our eight-month research calendar. We package our fully reproducible artifacts, finalize empirical tables within the thesis manuscript, and conclude our shadowing drills for the upcoming defense presentation."
    }
];

const timelineData = [];
for (let dayNum = 1; dayNum <= 240; dayNum++) {
    const found = milestoneDays.find(d => d.day === dayNum);
    if (found) {
        timelineData.push({ ...found, month: Math.min(8, Math.max(1, Math.ceil(found.day / 30))) });
    } else {
        const month = Math.min(8, Math.max(1, Math.ceil(dayNum / 30)));
        timelineData.push({
            day: dayNum,
            month,
            title: `توسعه، آزمایش و اعتبارسنجی تکمیلی مرحله ماه ${month}`,
            tasks: [
                `پیشبرد کدهای پایپ‌لاین و رفع باگ‌های مربوط به فاز ماه ${month}`,
                "مستندسازی خطاها و بررسی مطابقت داده‌ها با معیارهای پژوهش",
                "به‌روزرسانی تست‌های واحد و بررسی لاگ‌های اعتبارسنجی"
            ],
            reference: `داکیومنت‌ها و مراجع مهندسی منطبق بر مایلستون ماه ${month}`,
            speech: `Proceeding with research execution on Day ${dayNum}. We systematically consolidate technical milestones for Month ${month}, resolving structural anomalies and validating empirical logs to ensure comprehensive reproducibility across all pipeline stages.`
        });
    }
}

const phaseTitles = [
    { phase: 1, title: "فاز ۱", range: "ماه ۱ تا ۲", description: "فریز مخازن و برش عمودی", tag: "Baseline", fromMonth: 1, toMonth: 2 },
    { phase: 2, title: "فاز ۲", range: "ماه ۳ تا ۴", description: "پارس و تحلیل متادیتا", tag: "Extraction", fromMonth: 3, toMonth: 4 },
    { phase: 3, title: "فاز ۳", range: "ماه ۵ تا ۶", description: "گراف و MCP", tag: "Graph", fromMonth: 5, toMonth: 6 },
    { phase: 4, title: "فاز ۴", range: "ماه ۷ تا ۸", description: "ارزیابی و پایان‌نامه", tag: "Evaluation", fromMonth: 7, toMonth: 8 }
];

const phaseData = phaseTitles.map((p) => ({ ...p }));
const STORAGE_KEY = "GEMENEI_TRACKER_STATE_V1";
let appState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    calculateProgress();
}

function calculateProgress() {
    const total = timelineData.length;
    let completedDays = 0;

    timelineData.forEach(item => {
        const allChecked = item.tasks.every((_, idx) => appState[`${item.day}_${idx}`]);
        if (allChecked) completedDays++;
    });

    const pct = Math.round((completedDays / total) * 100);
    document.getElementById("progress-percent").innerText = `${pct}%`;
    document.getElementById("progress-bar").style.width = `${pct}%`;
    document.getElementById("days-completed").innerText = `${completedDays} / ${total}`;
}

const grid = document.getElementById("cards-grid");
const monthSelect = document.getElementById("filter-month");
const weekSelect = document.getElementById("filter-week");
const searchInput = document.getElementById("filter-search");

function buildPhaseAccordion() {
    const wrapper = document.getElementById("phase-accordion-wrap");
    wrapper.innerHTML = "";
    phaseData.forEach((phase) => {
        const detail = document.createElement("details");
        detail.className = "phase-accordion-item";
        if (phase.phase === 1) detail.setAttribute("open", "open");

        const monthDetails = [];
        for (let m = phase.fromMonth; m <= phase.toMonth; m++) {
            monthDetails.push(`
                <details class="month-accordion">
                    <summary>ماه ${m}</summary>
                    <div class="month-accordion-content">
                        <div>روند: ${phase.description}</div>
                        <div>هفته‌های ${Math.min(1 + (m-1)*4, 34)} تا ${Math.min(m*4, 35)}</div>
                    </div>
                </details>
            `);
        }

        detail.innerHTML = `
            <summary>${phase.title} | ${phase.range}</summary>
            <div class="phase-content">
                <strong>${phase.description}</strong><br>
                <span>${phase.tag}</span>
                <div class="phase-months">
                    ${monthDetails.join("")}
                </div>
            </div>
        `;
        wrapper.appendChild(detail);
    });
}

function buildWeekOptions() {
    const weeks = Array.from({ length: 35 }, (_, i) => i + 1);
    weeks.forEach(w => {
        const option = document.createElement("option");
        option.value = w;
        option.text = `هفته ${w}`;
        weekSelect.appendChild(option);
    });
}

function renderGrid() {
    const selectedMonth = monthSelect.value;
    const selectedWeek = weekSelect.value;
    const query = searchInput.value.toLowerCase().trim();

    grid.innerHTML = "";

    const items = timelineData.filter(d => {
        const matchMonth = (selectedMonth === "all" || d.month.toString() === selectedMonth);
        const matchWeek = (selectedWeek === "all" || Math.ceil(d.day / 7).toString() === selectedWeek);
        const matchQuery = d.title.toLowerCase().includes(query) ||
                           d.tasks.some(t => t.toLowerCase().includes(query));
        return matchMonth && matchWeek && matchQuery;
    });

    items.forEach(d => {
        const card = document.createElement("details");
        card.className = "timeline-card";
        card.open = false;

        const allDone = d.tasks.every((_, idx) => appState[`${d.day}_${idx}`]);
        if (allDone) card.classList.add("completed");

        const tasksList = d.tasks.map((task, idx) => {
            const key = `${d.day}_${idx}`;
            const isChecked = appState[key] ? "checked" : "";
            return `
                <li class="check-item">
                    <input type="checkbox" id="${key}" data-day="${d.day}" data-idx="${idx}" ${isChecked}>
                    <label for="${key}">${task}</label>
                </li>
            `;
        }).join("");

        card.innerHTML = `
            <summary>
                <span class="timeline-summary">
                    <span class="timeline-card-title">روز ${d.day}: ${d.title}</span>
                    <span class="timeline-card-badge">ماه ${d.month}</span>
                </span>
            </summary>
            <div class="timeline-card-body">
                <div class="section-header">چک‌لیست اقدامات عملیاتی:</div>
                <ul class="checklist">${tasksList}</ul>
                <div class="section-header">مرجع تخصصی مطالعه:</div>
                <div class="reference-box">${d.reference}</div>
                <div class="card-actions">
                    <button class="btn btn-outline" data-speech-day="${d.day}">تمرین گفتاری شادووئینگ</button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    document.querySelectorAll(".check-item input[type='checkbox']").forEach(box => {
        box.addEventListener("change", (e) => {
            const k = `${e.target.dataset.day}_${e.target.dataset.idx}`;
            if (e.target.checked) {
                appState[k] = true;
            } else {
                delete appState[k];
            }
            saveState();
            renderGrid();
        });
    });

    document.querySelectorAll("[data-speech-day]").forEach(btn => {
        btn.addEventListener("click", () => showShadowModal(Number(btn.dataset.speechDay)));
    });
}

const modal = document.getElementById("modal-container");
const modalHeading = document.getElementById("modal-heading");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("btn-modal-close");
const copyBtn = document.getElementById("btn-copy-speech");

function showShadowModal(dayNumber) {
    const entry = timelineData.find(d => d.day === dayNumber);
    if (!entry) return;

    modalHeading.innerText = `تمرین گفتاری شادووئینگ - روز ${entry.day} (ماه ${entry.month})`;
    modalText.innerText = entry.speech;
    modal.style.display = "flex";
}

modalClose.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => { if (e.target === modal) modal.style.display = "none"; });

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(modalText.innerText).then(() => {
        copyBtn.innerText = "کپی شد!";
        setTimeout(() => copyBtn.innerText = "کپی متن در کلیپ‌بورد", 1600);
    });
});

document.getElementById("btn-export").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(appState, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Gemenei-Tracker-Backup-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
});

document.getElementById("btn-import-trigger").addEventListener("click", () => {
    document.getElementById("file-importer").click();
});

document.getElementById("file-importer").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            appState = JSON.parse(event.target.result);
            saveState();
            renderGrid();
            alert("اطلاعات پیشرفت با موفقیت بازیابی شد.");
        } catch (err) {
            alert("خطا در بارگذاری فایل پشتیبان JSON.");
        }
    };
    reader.readAsText(file);
});

monthSelect.addEventListener("change", renderGrid);
weekSelect.addEventListener("change", renderGrid);
searchInput.addEventListener("input", renderGrid);

buildPhaseAccordion();
buildWeekOptions();
calculateProgress();
renderGrid();
