(function () {
    'use strict';

    var T = {
        ar: {
            h1a: 'ابدأ مجاناً',
            h1b: 'واختر خطتك لاحقاً',
            b1: 'تجربة مجانية لمدة 14 يومًا',
            b2: 'لا حاجة لبطاقة ائتمان',
            b3: 'لا إعدادات',
            b4: 'شامل لجميع التطبيقات',
            annual: 'سنوي',
            disc: 'خصم حتي 30%',
            monthly: 'شهري',
            perMonth: 'شهرياً',
            billMonthly: 'يُدفع شهريا',
            planBasic: 'الأساسية',
            planAdv: 'المتقدمة',
            planComp: 'الشاملة',
            hotLabel: 'الأكثر مبيعًا',
            ctaFree: 'ابدأ الاستخدام مجاناً',
            navCta: 'ابدأ الاستخدام مجانًا',
            navNote: 'دون الحاجة لبطاقة ائتمان',
            navPrices: 'الأسعار',
            navLogin: 'تسجيل الدخول',
            addonsH: 'طلبات الخدمات الإضافية',
            addon1H: 'تهيئه الحساب',
            addon1P: 'اطلب المساعدة في إعداد حسابك، وضبطه حسب احتياجاتك، أو إدارته بسهولة — فريقنا مستعد لدعمك.',
            addon1L: 'اطلب المساعدة في الحساب',
            addon2H: 'المحاسبة',
            addon2P: 'اطلب استشارة محاسبية من خبرائنا تشمل المراجعة المالية أو الدعم في التدقيق بكل احترافية.',
            addon2L: 'تحدث مع محاسبينا',
            addon3H: 'التخصيص',
            addon3P: 'اطلب ميزات مخصصة أو تطويرات برمجية لتكييف نظام دفترة وفقًا لاحتياجاتك.',
            addon3L: 'تواصل مع فريق الحلول المخصصة',
            logosH: 'انضم إلى +40,000 نشاط مشترك بالفعل مع دفترة.',
            logosSub: 'أنت على وشك بدء تجربتك المجانية لمدة 14 يومًا!',
            bandH: 'ابدأ بالخطة المجانية، قم بالترقية في أي لحظة.',
            bandP: 'تقدم دفترة مجموعة متنوعة من الخطط السعرية لتناسب احتياجات كل عمل. يستغرق التسجيل بضع دقائق فقط، ويمكنك بدء إدارة عملك على الفور.',
            bandBtn: 'ابدأ الاستخدام مجاناً',
            footCopy: 'دفترة © 2026',
            footPrivacy: 'سياسة الخصوصية',
            footTerms: 'الشروط والأحكام',
            footCompNote: 'متوافق بالكامل مع المرحلة الثانية من الفاتورة الإلكترونية',
            compatWith: 'متوافق مع',
            optAr: 'عربي',
            optEn: 'English'
        },
        en: {
            h1a: 'Start for Free',
            h1b: 'Pick a plan later',
            b1: '14-day free trial',
            b2: 'No credit card required',
            b3: 'No setups',
            b4: 'All-app inclusive',
            annual: 'Annual',
            disc: 'Up to 30% OFF',
            monthly: 'Monthly',
            perMonth: '/ month',
            billMonthly: 'Billed monthly',
            planBasic: 'Basic',
            planAdv: 'Advanced',
            planComp: 'Complete',
            hotLabel: 'Most Popular',
            ctaFree: 'Start Free Trial',
            navCta: 'Start for Free',
            navNote: 'No credit card required',
            navPrices: 'Pricing',
            navLogin: 'Login',
            addonsH: 'Additional Service Requests',
            addon1H: 'Account Setup',
            addon1P: 'Request help setting up your account and configuring it to your needs. Our team is ready to support you.',
            addon1L: 'Request Account Help',
            addon2H: 'Accounting',
            addon2P: 'Request an accounting consultation from our experts including financial review and audit support.',
            addon2L: 'Talk to Our Accountants',
            addon3H: 'Customization',
            addon3P: 'Request custom features or software development to adapt the daftra system to your specific needs.',
            addon3L: 'Contact Custom Solutions Team',
            logosH: 'Join +40,000 businesses already using daftra.',
            logosSub: 'You\'re about to start your 14-day free trial!',
            bandH: 'Start with the Free Plan, Upgrade at Any Time.',
            bandP: 'We offer a variety of pricing plans to suit the needs of every business. Registration takes only minutes.',
            bandBtn: 'Start for Free',
            footCopy: 'daftra © 2026',
            footPrivacy: 'Privacy Policy',
            footTerms: 'Terms & Conditions',
            footCompNote: 'Fully compliant with Phase 2 of the e-invoice',
            compatWith: 'Compatible With',
            optAr: 'عربي',
            optEn: 'English'
        }
    };

    var lang = 'ar';

    function t(k) { return (T[lang] || T.ar)[k] || ''; }

    var CHROME = [
        '#wrapwrap > header','header#top','header.o_top_fixed_element',
        '.o_top_fixed_element','nav.o_main_navbar','.o_main_navbar',
        '#oe_main_menu_navbar','.o_website_top_navbar',
        '.o_website_top_navbar_container','.o_header_standard','.o_header_overlay',
        '#wrapwrap > footer','footer#bottom','footer.o_footer','.o_footer','#footer',
        '#oe_snippets','.o_we_website_top_actions'
    ];
    function hideChrome() {
        CHROME.forEach(function (s) {
            document.querySelectorAll(s).forEach(function (el) {
                el.style.setProperty('display', 'none', 'important');
                el.style.setProperty('height', '0', 'important');
                el.style.setProperty('overflow', 'hidden', 'important');
            });
        });
        ['#wrapwrap', 'body'].forEach(function (s) {
            var el = document.querySelector(s);
            if (el) {
                el.style.setProperty('padding-top', '0', 'important');
                el.style.setProperty('margin-top', '0', 'important');
            }
        });
    }
    hideChrome();
    if (window.MutationObserver) {
        var _mo = new MutationObserver(hideChrome);
        _mo.observe(document.documentElement, { childList: true, subtree: true });
        setTimeout(function () { _mo.disconnect(); }, 7000);
    }

    function applyLang() {
        var wrap = document.getElementById('df-wrap');
        if (!wrap) return;

        var isAr = lang === 'ar';
        wrap.classList.toggle('lang-ar', isAr);
        wrap.classList.toggle('lang-en', !isAr);
        wrap.setAttribute('dir', isAr ? 'rtl' : 'ltr');
        document.documentElement.lang = lang;

        wrap.querySelectorAll('.df-logo-ar').forEach(function(el) {
            el.style.display = isAr ? '' : 'none';
        });
        wrap.querySelectorAll('.df-logo-en').forEach(function(el) {
            el.style.display = isAr ? 'none' : '';
        });

        wrap.querySelectorAll('[data-ar],[data-en]').forEach(function (el) {
            var txt = el.getAttribute('data-' + (isAr ? 'ar' : 'en'));
            if (txt) el.textContent = txt;
        });

        function setText(sel, key) {
            wrap.querySelectorAll(sel).forEach(function (el) { el.textContent = t(key); });
        }

        var h1a = wrap.querySelector('.df-h1a');
        var h1b = wrap.querySelector('.df-h1b');
        var freeSpan = wrap.querySelector('.df-h1-free');
        if (isAr) {
            if (h1a) { h1a.innerHTML = 'ابدأ <span class="df-h1-free">مجاناً</span>'; }
            if (h1b) h1b.textContent = t('h1b');
        } else {
            if (h1a) { h1a.innerHTML = 'Start for <span class="df-h1-free">Free</span>'; }
            if (h1b) h1b.textContent = t('h1b');
        }

        setText('.df-b1', 'b1');
        setText('.df-b2', 'b2');
        setText('.df-b3', 'b3');
        setText('.df-b4', 'b4');

        setText('.df-lbl-annual', 'annual');
        setText('.df-lbl-monthly', 'monthly');
        setText('.df-disc', 'disc');

        setText('.df-plan-basic .df-card__name', 'planBasic');
        setText('.df-plan-adv .df-card__name', 'planAdv');
        setText('.df-plan-comp .df-card__name', 'planComp');
        setText('.df-plan-comp .df-card__pop', 'hotLabel');
        setText('.df-price__per', 'perMonth');
        setText('.df-show-m .df-price__note', 'billMonthly');
        setText('.df-cta', 'ctaFree');

        setText('.df-addons-h', 'addonsH');
        setText('.df-addon1-h', 'addon1H');
        setText('.df-addon1-p', 'addon1P');
        setText('.df-addon1-l', 'addon1L');
        setText('.df-addon2-h', 'addon2H');
        setText('.df-addon2-p', 'addon2P');
        setText('.df-addon2-l', 'addon2L');
        setText('.df-addon3-h', 'addon3H');
        setText('.df-addon3-p', 'addon3P');
        setText('.df-addon3-l', 'addon3L');

        var logosH = wrap.querySelector('.df-logos-h');
        if (logosH) {
            if (isAr) {
                logosH.innerHTML = 'انضم إلى +40,000 نشاط مشترك<br/><span class="df-logos-h__line2">بالفعل مع <span class="df-logos-h__brand">دفترة</span>.</span>';
            } else {
                logosH.innerHTML = 'Join +40,000 businesses already<br/><span class="df-logos-h__line2">using <span class="df-logos-h__brand">daftra</span>.</span>';
            }
        }
        setText('.df-logos-sub', 'logosSub');

        setText('.df-band-h', 'bandH');
        setText('.df-band-p', 'bandP');
        setText('.df-band-btn', 'bandBtn');

        setText('.df-foot-compat', 'compatWith');

        setText('.df-foot-copy', 'footCopy');
        setText('.df-foot-privacy', 'footPrivacy');
        setText('.df-foot-terms', 'footTerms');
        setText('.df-foot-comp-note', 'footCompNote');
        setText('.df-foot-compat', 'compatWith');

        wrap.querySelectorAll('.df-nav__lang-opt').forEach(function (btn) {
            var isActive = btn.getAttribute('data-lang') === lang;
            btn.classList.toggle('active', isActive);
            var chk = btn.querySelector('.df-nav__lang-check');
            if (chk) chk.style.visibility = isActive ? 'visible' : 'hidden';
        });

        wrap.querySelectorAll('[data-ar][data-en]').forEach(function (el) {
            el.textContent = isAr ? el.getAttribute('data-ar') : el.getAttribute('data-en');
        });

        var FEAT_MAP_EN_AR = {
          '$52/mo per extra': '$52 شهري/لكل إضافي',
          '$9.33/mo per extra': '$9.33 شهري/لكل إضافي',
          '1 included · $13/mo per extra': '1 متضمنة · $13 شهري/لكل إضافي',
          '1 included · $3/mo each': '1 متضمنة · $3 شهري/لكل واحد',
          '1 included · $9.33/mo per extra': '1 متضمنة · $9.33 شهري/لكل إضافي',
          '10 GB included · $0.5/mo per extra': '10 متضمنة · $0.5 شهري/لكل إضافي',
          '10 included · $2.5/mo per extra': '10 متضمنة · $2.5 شهري/لكل إضافي',
          '100 / mo': '100 /شهرياً',
          '2 included · $3/mo each': '2 متضمنة · $3 شهري/لكل واحد',
          '20 GB included · $0.5/mo per extra': '20 متضمنة · $0.5 شهري/لكل إضافي',
          '3 included · $2.5/mo per extra': '3 متضمنة · $2.5 شهري/لكل إضافي',
          '3 included · $3/mo each': '3 متضمنة · $3 شهري/لكل واحد',
          '5 GB included · $0.5/mo per extra': '5 متضمنة · $0.5 شهري/لكل إضافي',
          '5 included · $15.6/mo per extra': '5 متضمنة · $15.6 شهري/لكل إضافي',
          '500 / mo': '500 /شهرياً',
          '6 included · $2.5/mo per extra': '6 متضمنة · $2.5 شهري/لكل إضافي',
          'API Access': 'إمكانية الوصول إلى واجهة API',
          'API Availability': 'توافر الـ API',
          'API Documentation': 'وثائق الـ API',
          'Accounting Management': 'إدارة الحسابات',
          'Additional Branches': 'الفروع الإضافية',
          'Additional Users': 'المستخدمين الإضافيين',
          'Aging Reports': 'تقارير أعمار الديون',
          'Assets & Depreciation': 'الأصول والإهلاكات',
          'Attendance Management': 'إدارة الحضور',
          'Automatic Bank Sync': 'المزامنة التلقائية مع البنك',
          'Backups': 'النسخ الاحتياطية',
          'Bill of Materials (BOM)': 'قائمة المواد (BOM)',
          'Branch Backup Control': 'التحكم في النسخ الاحتياطي للفرع',
          'CRM Reports': 'تقارير إدارة علاقات العملاء',
          'Cash Registers & Banks': 'الخزن النقدية والبنوك',
          'Chart of Accounts': 'دليل الحسابات',
          'Cheque Cycle': 'دورة الشيكات',
          'Cloud Point of Sale': 'نقاط بيع سحابية',
          'Commissions & Targets': 'العمولات والمبيعات المستهدفة',
          'Contracts': 'العقود',
          'Cost Centers': 'مراكز التكلفة',
          'Customer Follow-up': 'متابعة العملاء',
          'Customer Relationship Management': 'إدارة علاقات العملاء',
          'Customers': 'العملاء',
          'E-Commerce & Integrations': 'التجارة الإلكترونية والتطبيقات الخارجية',
          'Electronic Invoice': 'الفاتورة الإلكترونية',
          'Employee Requests': 'إدارة طلبات الموظفين',
          'Employees': 'الموظفين',
          'Financial Reports': 'التقارير المالية',
          'HR Reports': 'تقارير الموارد البشرية',
          'Human Resources Management': 'إدارة الموارد البشرية',
          'Installment Management': 'إدارة أقساط المبيعات',
          'Inventory & Purchasing': 'إدارة المخزون والمشتريات',
          'Inventory Tracking': 'تتبع المخزون',
          'Invoices & Quotes': 'الفواتير وعروض الأسعار',
          'Journal Entries': 'القيود اليومية',
          'Loyalty Points': 'نقاط الولاء',
          'Manufacturing Cycle': 'دورة التصنيع',
          'Membership Management': 'إدارة العضويات',
          'Multi-Channel Engagement': 'المشاركة عبر قنوات متعددة',
          'Offline POS': 'نقاط بيع بدون أنترنت',
          'Online Payments': 'المدفوعات عبر الإنترنت',
          'Operations Management': 'إدارة العمليات',
          'Organizational Chart': 'الهيكل التنظيمي',
          'Payment & Receipt Vouchers': 'سندات الصرف والقبض',
          'Payroll': 'الأجور والمرتبات',
          'Points & Balances': 'النقاط والأرصدة',
          'Price List': 'قائمة الأسعار',
          'Products & Services': 'المنتجات والخدمات',
          'Purchase Invoices': 'فواتير المشتريات',
          'Purchase Management': 'إدارة المشتريات',
          'Purchase Orders (PO)': 'أوامر الشراء (PO)',
          'Rental Units Management': 'إدارة الإيجارات/الوحدات',
          'Rental / Units Management': 'إدارة الإيجارات/الوحدات',
          'Rental/Units Management': 'إدارة الإيجارات/الوحدات',
          'Automated Backups': 'النسخ الاحتياطية',
          'WooCommerce Integration': 'Woocommerce - ووكومرس',
          'Woocommerce': 'Woocommerce - ووكومرس',
          'Zapier Integration': 'Zapier - زابير',
          'Zapier': 'Zapier - زابير',
          'daftra Mobile Apps': 'تطبيقات دفترة للجوال',
          'Mobile Apps': 'تطبيقات دفترة للجوال',
          'Reservations': 'الحجوزات',
          'SMS Integration': 'ربط SMS',
          'Sales Management': 'إدارة المبيعات',
          'Sales Orders': 'أوامر المبيعات',
          'Sales Promotions': 'العروض على المبيعات',
          'Sales Reports': 'تقارير المبيعات',
          'Stock Alerts': 'تنبيهات المخزون',
          'Stock Count': 'جرد المخزون',
          'Stock Count / Inventory': 'جرد المخزون',
          'Inventory Count': 'جرد المخزون',
          'Stock Count/Inventory': 'جرد المخزون',
          'Storage (GB)': 'المساحة التخزينية (جيجا بايت)',
          'Supplier Management': 'إدارة الموردين',
          'Support & Backup': 'الدعم والنسخ الاحتياطي',
          'Tax Declarations': 'إقرارات ضريبية',
          'Technical Support': 'الدعم الفني',
          'Time Tracking': 'تتبع الوقت',
          'Unlimited': 'غير محدود',
          'Warehouses': 'المستودعات',
          'Work Orders / Projects': 'أوامر الشغل/المشاريع'
        };
        var FEAT_MAP_AR_EN = {};
        Object.keys(FEAT_MAP_EN_AR).forEach(function(en) {
            FEAT_MAP_AR_EN[FEAT_MAP_EN_AR[en]] = en;
        });
        FEAT_MAP_AR_EN['غير محدود'] = 'Unlimited';
        wrap.querySelectorAll('.df-feat-nm, .df-val, .df-unl').forEach(function (el) {
            var txt = el.textContent.trim();
            if (isAr) {
                if (FEAT_MAP_EN_AR[txt]) el.textContent = FEAT_MAP_EN_AR[txt];
            } else {
                if (FEAT_MAP_AR_EN[txt]) el.textContent = FEAT_MAP_AR_EN[txt];
            }
        });

        var SEC_NAME_MAP = {
            ar: {
                'Sales Management': 'إدارة المبيعات',
                'Customer Relationship Management': 'إدارة علاقات العملاء',
                'Inventory & Purchasing': 'إدارة المخزون والمشتريات',
                'Accounting Management': 'إدارة الحسابات',
                'Operations Management': 'إدارة العمليات',
                'Human Resources Management': 'إدارة الموارد البشرية',
                'E-Commerce & Integrations': 'التجارة الإلكترونية والتطبيقات الخارجية',
                'Support & Backup': 'الدعم والنسخ الاحتياطي',
                'API Availability': 'توافر الـ API',
                'Add-On': 'Add-On',
                'Add-Ons': 'إضافات'
            },
            en: {
                'إدارة المبيعات': 'Sales Management',
                'إدارة علاقات العملاء': 'Customer Relationship Management',
                'إدارة المخزون والمشتريات': 'Inventory & Purchasing',
                'إدارة الحسابات': 'Accounting Management',
                'إدارة العمليات': 'Operations Management',
                'إدارة الموارد البشرية': 'Human Resources Management',
                'التجارة الإلكترونية والتطبيقات الخارجية': 'E-Commerce & Integrations',
                'الدعم والنسخ الاحتياطي': 'Support & Backup',
                'توافر الـ API': 'API Availability',
                'Add-On': 'Add-On',
                'Add-Ons': 'Add-Ons'
            }
        };
        wrap.querySelectorAll('.df-sec-name').forEach(function (el) {
            var cur = el.textContent.trim();
            var translated = isAr ? (SEC_NAME_MAP.ar[cur] || cur) : (SEC_NAME_MAP.en[cur] || cur);
            el.textContent = translated;
        });

        var SEC_MAP = {

            'إدارة المبيعات':                    { cls: 'df-sec-sales',   color: '#7c3aed', icon: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>' },
            'إدارة علاقات العملاء':              { cls: 'df-sec-crm',     color: '#4f46e5', icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
            'إدارة المخزون والمشتريات':          { cls: 'df-sec-inv',     color: '#db2777', icon: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>' },
            'إدارة الحسابات':                    { cls: 'df-sec-acc',     color: '#2563eb', icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
            'إدارة العمليات':                    { cls: 'df-sec-ops',     color: '#ea580c', icon: '<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>' },
            'إدارة الموارد البشرية':             { cls: 'df-sec-hr',      color: '#0d9488', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
            'التجارة الإلكترونية والتطبيقات الخارجية': { cls: 'df-sec-ecom', color: '#0891b2', icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' },
            'الدعم والنسخ الاحتياطي':            { cls: 'df-sec-support', color: '#16a34a', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
            'توافر الـ API':                     { cls: 'df-sec-api',     color: '#475569', icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>' },
            'Add-On':                             { cls: 'df-sec-addon',   color: '#d97706', icon: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>' },

            'Sales Management':                   { cls: 'df-sec-sales',   color: '#7c3aed', icon: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>' },
            'Customer Relationship Management':  { cls: 'df-sec-crm',     color: '#4f46e5', icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
            'Inventory & Purchasing':            { cls: 'df-sec-inv',     color: '#db2777', icon: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>' },
            'Accounting Management':             { cls: 'df-sec-acc',     color: '#2563eb', icon: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>' },
            'Operations Management':             { cls: 'df-sec-ops',     color: '#ea580c', icon: '<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>' },
            'Human Resources Management':        { cls: 'df-sec-hr',      color: '#0d9488', icon: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>' },
            'E-Commerce & Integrations':         { cls: 'df-sec-ecom',    color: '#0891b2', icon: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' },
            'Support & Backup':                  { cls: 'df-sec-support', color: '#16a34a', icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
            'API Availability':                  { cls: 'df-sec-api',     color: '#475569', icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>' },
            'Add-Ons':                            { cls: 'df-sec-addon',   color: '#d97706', icon: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>' }
        };
        var SVG_OPEN = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">';
        wrap.querySelectorAll('tr.df-sec').forEach(function (tr) {

            var nameEl = tr.querySelector('.df-sec-name') ||
                         tr.querySelector('[data-ar][data-en]') ||
                         tr.querySelector('td > span > span:last-child');
            if (!nameEl) return;
            var nameAr = (nameEl.getAttribute('data-ar') || nameEl.textContent || '').trim();
            var nameEn = (nameEl.getAttribute('data-en') || '').trim();
            var cfg = SEC_MAP[nameAr] || SEC_MAP[nameEn] || SEC_MAP[nameEl.textContent.trim()];
            if (!cfg) return;

            if (!tr.classList.contains(cfg.cls)) tr.classList.add(cfg.cls);

            var iconEl = tr.querySelector('.df-sec-icon');
            if (iconEl) {
                iconEl.style.background = cfg.color;
                iconEl.style.minWidth = '22px';
                iconEl.innerHTML = SVG_OPEN + cfg.icon + '</svg>';
            }
        });
    }

    function init() {
        var wrap = document.getElementById('df-wrap');
        if (!wrap) return;

        hideChrome();

        var hl = document.documentElement.lang || navigator.language || 'ar';
        lang = hl.startsWith('en') ? 'en' : 'ar';

        var h1aEl = wrap.querySelector('.df-h1a');
        if (h1aEl && !h1aEl.querySelector('.df-h1-free')) {
            if (lang === 'ar') {
                h1aEl.innerHTML = 'ابدأ <span class="df-h1-free">مجاناً</span>';
            }
        }
        applyLang();

        var langToggle = document.getElementById('home-lang-toggle');
        var langDropdown = document.getElementById('home-lang-dropdown');
        if (langToggle && langDropdown) {
            langToggle.addEventListener('click', function (e) {
                e.stopPropagation();
                langDropdown.classList.toggle('open');
            });
            document.addEventListener('click', function () {
                langDropdown.classList.remove('open');
            });
        }
        wrap.querySelectorAll('.df-nav__lang-opt').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                lang = btn.getAttribute('data-lang');
                if (langDropdown) langDropdown.classList.remove('open');
                applyLang();
            });
        });

        var tglSwitch = wrap.querySelector('#df-tgl-switch');
        var tglAnnual = wrap.querySelector('.df-tgl-annual-wrap');
        var tglMonthly = wrap.querySelector('.df-tgl-monthly-wrap');

        function setBilling(mode) {
            var isAnnual = mode === 'annual';
            wrap.classList.toggle('billing-annual', isAnnual);
            if (tglSwitch) tglSwitch.setAttribute('data-active', mode);
            if (tglAnnual)  tglAnnual.classList.toggle('active', isAnnual);
            if (tglMonthly) tglMonthly.classList.toggle('active', !isAnnual);
        }

        if (tglAnnual) {
            tglAnnual.addEventListener('click', function () { setBilling('annual'); });
        }

        if (tglMonthly) {
            tglMonthly.addEventListener('click', function () { setBilling('monthly'); });
        }

        if (tglSwitch) {
            tglSwitch.addEventListener('click', function () {
                var current = tglSwitch.getAttribute('data-active');
                setBilling(current === 'annual' ? 'monthly' : 'annual');
            });
        }

        setBilling('monthly');

        var DESC_MAP_AR = {
          'Cloud Point of Sale': 'احصل على عدد غير محدود من أجهزة نقاط البيع ضمن خطتك مع تكامل كامل مع المخزون والمحاسبة.',
          'Sales Reports': 'تابع أداء المبيعات واتجاهات الإيرادات وتحليلات المنتجات بتقارير مفصلة.',
          'Online Payments': 'استقبل المدفوعات إلكترونيًا عبر بوابات موثوقة مرتبطة مجانًا مع دفترة.',
          'Sales Promotions': 'فعّل عروضًا موجهة على منتجاتك أو فئات من العملاء لزيادة التفاعل.',
          'Price List': 'حدد أسعارًا مخصصة حسب العميل أو المنتج أو قناة البيع.',
          'Sales Orders': 'أنشئ طلبات بيع مرنة وحوّلها بسهولة إلى فواتير مع تحديث المخزون.',
          'Commissions & Targets': 'حدّد أهداف المبيعات وتتبع العمولات بسهولة.',
          'Loyalty Points': 'كافئ عملاءك بنقاط مقابل مشترياتهم وفعّل برامج ولاء مخصصة.',
          'Installment Management': 'اسمح لعملائك بالدفع بالأقساط مع تتبع الاستحقاقات.',
          'Offline POS': 'استخدم أجهزة نقاط البيع دون الحاجة لاتصال بالإنترنت.',
          'Invoices & Quotes': 'أنشئ فواتير وعروض أسعار باحتراف وعيّن حالات مخصصة.',
          'Customer Follow-up': 'تابع عملاءك من مكان واحد مع المستندات والمواعيد والملاحظات.',
          'Multi-Channel Engagement': 'شارك المعاملات مع العملاء عبر البريد الإلكتروني والواتساب.',
          'CRM Reports': 'اطّلع على تقارير تفصيلية تشمل الحسابات والمبيعات والمدفوعات.',
          'Membership Management': 'إدارة كاملة للعضويات والاشتراكات من مكان واحد.',
          'Points & Balances': 'نظام مرن لإدارة النقاط والأرصدة لتقديم عروض ذكية.',
          'SMS Integration': 'أرسل رسائل SMS مباشرة من دفترة لتنبيهات فورية.',
          'Customers': 'عدد العملاء الجدد الذين يمكنك إضافتهم بناءً على خطتك.',
          'Products & Services': 'إدارة مرنة لعدد غير محدود من المنتجات والخدمات.',
          'Supplier Management': 'سجلات منظمة ومتابعة دقيقة لعلاقات الموردين.',
          'Inventory Tracking': 'راقب مخزونك في الوقت الفعلي لتتجنب النقص أو الفائض.',
          'Stock Count': 'قم بإجراء جرد للمخزون لمطابقة الكميات الفعلية مع النظام.',
          'Stock Alerts': 'احصل على تنبيهات تلقائية عند انخفاض الكميات.',
          'Purchase Invoices': 'إدارة فواتير المشتريات آليًا لتوفير الوقت والتحكم في التكاليف.',
          'Purchase Management': 'إدارة مشتريات مرنة ومتكاملة للتحكم الكامل في دورة الشراء.',
          'Purchase Orders (PO)': 'أنشئ أوامر الشراء واضحة واحترافية لتسريع الاستلام.',
          'Warehouses': 'أدر مستودعاتك في مواقع مختلفة من منصة واحدة.',
          'Assets & Depreciation': 'إدارة ذكية للأصول تشمل تسجيلها وحساب الإهلاك تلقائيًا.',
          'Payment & Receipt Vouchers': 'أنشئ سندات صرف وقبض تربط المعاملات بالحسابات بدقة.',
          'Chart of Accounts': 'أنشئ وأدر دليل الحسابات لإدارة مالية منظمة.',
          'Journal Entries': 'أنشئ قيودًا محاسبية تلقائيًا من الأنشطة التشغيلية.',
          'Automatic Bank Sync': 'اربط حسابك البنكي مع مزامنة تلقائية للحركات.',
          'Financial Reports': 'تابع الأداء المالي لحظيًا من خلال تقارير شاملة.',
          'Aging Reports': 'راقب الديون حسب المدة لاتخاذ قرارات أسرع في التحصيل.',
          'Tax Declarations': 'أنشئ تقارير ضريبية شاملة جاهزة للتقديم.',
          'Cheque Cycle': 'أدر الشيكات بخطوات واضحة من الإصدار حتى التحصيل.',
          'Cost Centers': 'وزّع المصروفات والإيرادات على مراكز التكلفة.',
          'Cash Registers & Banks': 'أدر كل حساب بنكي وخزنة بسهولة مع تتبع الأرصدة.',
          'Work Orders / Projects': 'أنشئ أوامر الشغل وتابع الحالات مع ربط تلقائي.',
          'Reservations': 'أدر الحجوزات بتكامل ذكي يربط المواعيد بالفواتير.',
          'Time Tracking': 'تابع ساعات العمل على المهام واحتسب التكاليف تلقائيًا.',
          'Manufacturing Cycle': 'حدد دورة التصنيع الكاملة من المواد الخام إلى المنتجات النهائية.',
          'Bill of Materials (BOM)': 'أنشئ قائمة مواد مرنة واربطها بخط الإنتاج والمخزون.',
          'Rental Units Management': 'أجّر أي وحدة بسهولة وادِر كل شيء من مكان واحد.',
          'Organizational Chart': 'أنشئ هيكلًا تنظيميًا يعكس واقع شركتك بدقة.',
          'Contracts': 'أنشئ وأدر عقود الموظفين رقميًا مع جميع الشروط.',
          'Attendance Management': 'تابع دوام الموظفين لحظة بلحظة مع ربط سجلات الحضور بكشوف الرواتب.',
          'Payroll': 'أنشئ الرواتب بناءً على الحضور ومكونات الراتب والمكافآت.',
          'Employee Requests': 'أدر جميع طلبات الموارد البشرية من مكان واحد.',
          'HR Reports': 'تابع أداء فريقك بتقارير شاملة تغطي الرواتب والحضور.',
          'Employees': 'أضف وأدر ملفات الموظفين مع جميع البيانات والمستندات.',
          'Technical Support': 'دعم فني متاح 24/7 عبر الهاتف أو الواتساب أو الإيميل.',
          'Backups': 'نسخ احتياطية منتظمة لبياناتك لضمان سلامتها.',
          'Branch Backup Control': 'تحكم في إعدادات النسخ الاحتياطي لكل فرع على حدة.',
          'API Access': 'تكامل دفترة مع أنظمتك الخارجية عبر API موثّق.',
          'API Documentation': 'دليل تقني شامل لاستخدام API دفترة بكل سهولة.',
          'Additional Users': 'أضف مستخدمين إضافيين لحسابك بتكلفة شهرية مخفضة.',
          'Additional Branches': 'أضف فروع إضافية لعملك وإدارتها من منصة واحدة.',
          'Storage (GB)': 'مساحة تخزين مضمونة لكل ملفاتك ومستنداتك في دفترة.',
          'WooCommerce Integration': 'قم بمزامنة متجرك على ووكومرس مع دفترة لإدارة المنتجات والمخزون والمبيعات بشكل فوري.',
          'Woocommerce': 'قم بمزامنة متجرك على ووكومرس مع دفترة لإدارة المنتجات والمخزون والمبيعات بشكل فوري.',
          'Zapier Integration': 'قم بأتمتة المهام ودمج دفترة مع أكثر من 5000 تطبيق باستخدام Zapier بدون الحاجة للبرمجة.',
          'Zapier': 'قم بأتمتة المهام ودمج دفترة مع أكثر من 5000 تطبيق باستخدام Zapier.',
          'Mobile Apps': 'ادخل إلى حسابك في دفترة من أي مكان باستخدام تطبيقات iOS وAndroid.',
          'Rental / Units Management': 'أجّر أي وحدة بسهولة وادِر كل شيء من مكان واحد سواء كانت غرفًا أو معدات أو سيارات.',
          'Automated Backups': 'نسخ احتياطية منتظمة لبياناتك لضمان سلامتها واستمرارية عملك.'
        };
        var DESC_MAP_EN = {
          'Cloud Point of Sale': 'Get unlimited POS devices in your plan with full integration with inventory, accounting, and CRM.',
          'Sales Reports': 'Track sales performance, revenue trends, and product analytics with detailed reports.',
          'Online Payments': 'Accept payments electronically through trusted gateways linked for free with daftra.',
          'Sales Promotions': 'Activate targeted promotions on products or customer segments to boost engagement.',
          'Price List': 'Set custom prices by customer, product, or sales channel to maximize profitability.',
          'Sales Orders': 'Create flexible sales orders with custom statuses and convert them to invoices easily.',
          'Commissions & Targets': 'Set sales targets and track commissions easily to motivate your sales team.',
          'Loyalty Points': 'Reward customers with points for purchases and activate custom loyalty programs.',
          'Installment Management': 'Allow customers to pay in installments with automatic reminders.',
          'Offline POS': 'Record sales without internet. Transactions sync automatically when connection is restored.',
          'Invoices & Quotes': 'Create professional invoices and quotes with custom statuses for easy tracking.',
          'Customer Follow-up': 'Track all your customers from one place with documents, appointments, and notes.',
          'Multi-Channel Engagement': 'Share transactions with customers via email, WhatsApp, and social media.',
          'CRM Reports': 'Get detailed reports covering accounts, sales, and payments for smarter decisions.',
          'Membership Management': 'Fully manage memberships and subscriptions from one place.',
          'Points & Balances': 'Flexible system to manage points and balances for smart offers.',
          'SMS Integration': 'Send SMS directly from daftra via a service provider for instant notifications.',
          'Customers': 'Number of new customers you can add based on your plan.',
          'Products & Services': 'Flexible management for unlimited products and services from one place.',
          'Supplier Management': 'Organized records and precise tracking of supplier relationships.',
          'Inventory Tracking': 'Monitor your inventory in real-time to avoid shortages or surpluses.',
          'Stock Count': 'Conduct inventory counts to match actual quantities with the system.',
          'Stock Count / Inventory': 'Conduct inventory counts to match actual quantities with the system.',
          'Stock Alerts': 'Get automatic alerts when quantities drop to avoid stockouts.',
          'Purchase Invoices': 'Automate purchase invoice management to save time and control costs.',
          'Purchase Management': 'Flexible purchasing management for full control of your buying cycle.',
          'Purchase Orders (PO)': 'Create clear professional purchase orders to speed up receipt and reduce errors.',
          'Warehouses': 'Manage your warehouses in different locations from one platform.',
          'Assets & Depreciation': 'Smart asset management including registration and automatic depreciation.',
          'Payment & Receipt Vouchers': 'Create payment and receipt vouchers linking transactions to accounts accurately.',
          'Chart of Accounts': 'Create and manage your general ledger with ready-made or custom categories.',
          'Journal Entries': 'Create accounting entries automatically from operational activities.',
          'Automatic Bank Sync': 'Connect your bank account with automatic transaction sync for instant reconciliation.',
          'Financial Reports': 'Track financial performance in real-time with comprehensive reports.',
          'Aging Reports': 'Monitor debts by duration to make faster collection decisions.',
          'Tax Declarations': 'Create comprehensive tax reports ready for submission to authorities.',
          'Cheque Cycle': 'Manage checks through clear steps from issuance to collection.',
          'Cost Centers': 'Distribute expenses and revenues to cost centers and analyze profitability.',
          'Cash Registers & Banks': 'Manage all bank accounts and cash registers with precise balance tracking.',
          'Work Orders / Projects': 'Create work orders, set priorities, and track custom statuses automatically.',
          'Reservations': 'Manage reservations with smart integration linking appointments to invoices.',
          'Time Tracking': 'Track work hours on tasks and projects and calculate costs automatically.',
          'Manufacturing Cycle': 'Define the complete manufacturing cycle from raw materials to finished products.',
          'Bill of Materials (BOM)': 'Create flexible material lists and link them to the production line.',
          'Rental Units Management': 'Rent any unit easily and manage everything from one place.',
          'Organizational Chart': 'Create an organizational chart reflecting your company structure accurately.',
          'Contracts': 'Create and manage employee contracts digitally with all terms and dates.',
          'Attendance Management': 'Track employee attendance in real-time linked directly to payroll.',
          'Payroll': 'Generate salaries based on attendance, components, and bonuses accurately.',
          'Employee Requests': 'Manage all HR requests from one place with custom approval stages.',
          'HR Reports': 'Track team performance with comprehensive reports covering salaries and attendance.',
          'Employees': 'Add and manage employee files with all personal and professional data.',
          'Technical Support': '24/7 technical support via phone, WhatsApp, or email always by your side.',
          'Backups': 'Regular backups of your data to ensure its safety and business continuity.',
          'Branch Backup Control': 'Control backup settings for each branch individually.',
          'API Access': 'Integrate daftra with your external systems via documented and easy-to-use API.',
          'API Documentation': 'Comprehensive technical guide for using the daftra API easily.',
          'Additional Users': 'Add extra users to your account at a discounted monthly cost.',
          'Additional Branches': 'Add extra branches and manage them from one platform.',
          'Storage (GB)': 'Guaranteed storage space for all your files and documents in daftra.',
          'WooCommerce Integration': 'Sync your WooCommerce store with daftra to manage products, inventory, and online sales in real-time.',
          'Woocommerce': 'Sync your WooCommerce store with daftra to manage products, inventory, and online sales.',
          'Zapier Integration': 'Automate tasks and integrate daftra with 5,000+ apps using Zapier without coding.',
          'Zapier': 'Automate tasks and integrate daftra with 5,000+ apps using Zapier.',
          'Mobile Apps': 'Access your daftra account from anywhere using iOS and Android apps.',
          'Rental / Units Management': 'Rent any unit easily and manage everything from one place.',
          'Automated Backups': 'Regular backups of your data to ensure its safety and business continuity.'
        };

        wrap.querySelectorAll('tr.df-feat td:first-child').forEach(function (td) {
            if (td.querySelector('.df-info-icon')) return;
            var nameEl = td.querySelector('.df-feat-nm');
            if (!nameEl) return;
            var enName = (nameEl.getAttribute('data-en') || nameEl.textContent).trim();
            var arDesc = DESC_MAP_AR[enName];
            var enDesc = DESC_MAP_EN[enName];
            if (!arDesc && !enDesc) return;
            var icon = document.createElement('i');
            icon.className = 'fa fa-info-circle df-info-icon';
            icon.setAttribute('data-tip-ar', arDesc || enDesc || '');
            icon.setAttribute('data-tip-en', enDesc || arDesc || '');
            td.insertBefore(icon, nameEl.nextSibling);
        });

        var tip = document.getElementById('df-tip');
        if (tip) {
            function moveTip(e) {
                var x = e.clientX + 14, y = e.clientY + 14;
                if (x + tip.offsetWidth > window.innerWidth - 10) x = e.clientX - tip.offsetWidth - 14;
                if (y + tip.offsetHeight > window.innerHeight - 10) y = e.clientY - tip.offsetHeight - 14;
                tip.style.left = x + 'px';
                tip.style.top = y + 'px';
            }
            wrap.querySelectorAll('.df-info-icon').forEach(function (el) {
                el.addEventListener('mouseenter', function (e) {
                    var tx = lang === 'ar' ? el.getAttribute('data-tip-ar') : el.getAttribute('data-tip-en');
                    if (!tx) tx = el.getAttribute('data-tip');
                    if (!tx) return;
                    tip.textContent = tx;
                    tip.style.display = 'block';
                    moveTip(e);
                });
                el.addEventListener('mousemove', moveTip);
                el.addEventListener('mouseleave', function () { tip.style.display = 'none'; });
            });
        }

        if (window.IntersectionObserver) {
            var obs = new IntersectionObserver(function (entries) {
                entries.forEach(function (en) {
                    if (en.isIntersecting) { en.target.classList.add('df-vis'); obs.unobserve(en.target); }
                });
            }, { threshold: 0.07 });
            wrap.querySelectorAll('.df-reveal, .df-addon, .df-stat').forEach(function (el) { obs.observe(el); });
        } else {
            wrap.querySelectorAll('.df-reveal, .df-addon, .df-stat').forEach(function (el) { el.classList.add('df-vis'); });
        }

        window.dfApplyLang = function (l) { lang = l; applyLang(); };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    document.addEventListener('page:update', init);
    document.addEventListener('website:ready', init);
    window.addEventListener('load', function () { hideChrome(); });
}());
