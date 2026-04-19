
(function () {
    'use strict';

    var T = {
        ar: {
            heroTitle:    'تواصل معنا',
            heroSub:      'هل لديك سؤال أو تعليق أو تريد التحدث معنا؟ يسعدنا سماعك!',
            panelTitle:   'معلومات التواصل',
            formTitle:    'أرسل رسالة',
            labelName:    'الاسم الكامل *',
            labelEmail:   'البريد الإلكتروني *',
            labelPhone:   'رقم الهاتف',
            labelSubject: 'الموضوع *',
            labelMsg:     'الرسالة *',
            phName:       'أدخل اسمك',
            phEmail:      'أدخل بريدك الإلكتروني',
            phPhone:      'رقم هاتفك',
            phSubject:    'موضوع رسالتك',
            phMsg:        'اكتب رسالتك هنا...',
            submitBtn:    'إرسال الرسالة',
            successMsg:   'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.',
            navCta:       'ابدأ مجاناً',
            egypt:        'مصر',
            saudi:        'السعودية',
            uae:          'الإمارات',
            qatar:        'قطر',
            kuwait:       'الكويت',
            bahrain:      'البحرين',
            oman:         'عمان',
            jordan:       'الأردن',
            middleEast:   'الشرق الأوسط',
            phoneSearch:  'ابحث عن دولة...',
            footCopy:        'دفترة © 2026',
            footPrivacy:     'سياسة الخصوصية',
            footTerms:       'الشروط والأحكام',
            footCompNote:    'متوافق بالكامل مع المرحلة الثانية من الفاتورة الإلكترونية',
            compatWith:      'متوافق مع'
        },
        en: {
            heroTitle:    'Contact Us',
            heroSub:      'Have a question, comment, or want to say hi? We\'ll be happy to receive an e-mail from you!',
            panelTitle:   'Contact Information',
            formTitle:    'Send Message',
            labelName:    'Full Name *',
            labelEmail:   'Email *',
            labelPhone:   'Phone Number',
            labelSubject: 'Subject *',
            labelMsg:     'Message *',
            phName:       'Enter your name',
            phEmail:      'Enter your email',
            phPhone:      'Your phone number',
            phSubject:    'Your message subject',
            phMsg:        'Write your message here...',
            submitBtn:    'Send Message',
            successMsg:   'Your message has been sent successfully! We\'ll be in touch soon.',
            navCta:       'Try for Free',
            egypt:        'Egypt',
            saudi:        'Saudi Arabia',
            uae:          'UAE',
            qatar:        'Qatar',
            kuwait:       'Kuwait',
            bahrain:      'Bahrain',
            oman:         'Oman',
            jordan:       'Jordan',
            middleEast:   'Middle East',
            phoneSearch:  'Search country...',
            footCopy:        'daftra © 2026',
            footPrivacy:     'Privacy Policy',
            footTerms:       'Terms & Conditions',
            footCompNote:    'Fully compliant with Phase 2 of e-invoicing',
            compatWith:      'Compliant With'
        }
    };

    var COUNTRIES = [
        { name: 'Egypt', nameAr: 'مصر', code: '+20', flag: 'https://static.portal.daftra.com/images/egypt.png', iso: 'EG' },
        { name: 'Saudi Arabia', nameAr: 'السعودية', code: '+966', flag: 'https://static.portal.daftra.com/images/saudi-arabia.png', iso: 'SA' },
        { name: 'United Arab Emirates', nameAr: 'الإمارات', code: '+971', flag: 'https://static.portal.daftra.com/images/uae.png', iso: 'AE' },
        { name: 'Qatar', nameAr: 'قطر', code: '+974', flag: 'https://static.portal.daftra.com/images/qatar.png', iso: 'QA' },
        { name: 'Kuwait', nameAr: 'الكويت', code: '+965', flag: 'https://static.portal.daftra.com/images/kuwait.png', iso: 'KW' },
        { name: 'Bahrain', nameAr: 'البحرين', code: '+973', flag: 'https://static.portal.daftra.com/images/bahrain.png', iso: 'BH' },
        { name: 'Oman', nameAr: 'عمان', code: '+968', flag: 'https://static.portal.daftra.com/images/oman.png', iso: 'OM' },
        { name: 'Jordan', nameAr: 'الأردن', code: '+962', flag: 'https://static.portal.daftra.com/images/jordan.png', iso: 'JO' },
        { name: 'Iraq', nameAr: 'العراق', code: '+964', iso: 'IQ' },
        { name: 'Lebanon', nameAr: 'لبنان', code: '+961', iso: 'LB' },
        { name: 'Syria', nameAr: 'سوريا', code: '+963', iso: 'SY' },
        { name: 'Libya', nameAr: 'ليبيا', code: '+218', iso: 'LY' },
        { name: 'Tunisia', nameAr: 'تونس', code: '+216', iso: 'TN' },
        { name: 'Morocco', nameAr: 'المغرب', code: '+212', iso: 'MA' },
        { name: 'Algeria', nameAr: 'الجزائر', code: '+213', iso: 'DZ' },
        { name: 'Sudan', nameAr: 'السودان', code: '+249', iso: 'SD' },
        { name: 'Yemen', nameAr: 'اليمن', code: '+967', iso: 'YE' },
        { name: 'Palestine', nameAr: 'فلسطين', code: '+970', iso: 'PS' },
        { name: 'United Kingdom', nameAr: 'المملكة المتحدة', code: '+44', iso: 'GB' },
        { name: 'United States', nameAr: 'الولايات المتحدة', code: '+1', iso: 'US' },
        { name: 'France', nameAr: 'فرنسا', code: '+33', iso: 'FR' },
        { name: 'Germany', nameAr: 'ألمانيا', code: '+49', iso: 'DE' },
        { name: 'Turkey', nameAr: 'تركيا', code: '+90', iso: 'TR' },
        { name: 'India', nameAr: 'الهند', code: '+91', iso: 'IN' },
        { name: 'Pakistan', nameAr: 'باكستان', code: '+92', iso: 'PK' },
        { name: 'Indonesia', nameAr: 'إندونيسيا', code: '+62', iso: 'ID' },
        { name: 'Nigeria', nameAr: 'نيجيريا', code: '+234', iso: 'NG' },
        { name: 'South Africa', nameAr: 'جنوب أفريقيا', code: '+27', iso: 'ZA' },
        { name: 'Australia', nameAr: 'أستراليا', code: '+61', iso: 'AU' },
        { name: 'Canada', nameAr: 'كندا', code: '+1', iso: 'CA' }
    ];

    var currentLang = 'ar';
    var selectedCountryCode = '+20';
    var selectedCountryFlag = 'https://static.portal.daftra.com/images/egypt.png';

    var wrap, tabs, panels, codeBtn, codeDrop, phoneFlag, codeVal, phoneSearch, phoneList, submitBtn, successDiv;

    function updateRefs() {
        wrap       = document.getElementById('dc-wrap');
        tabs       = document.querySelectorAll('.dc-tab');
        panels     = document.querySelectorAll('.dc-info-panel');
        codeBtn    = document.getElementById('dc-phone-code-btn');
        codeDrop   = document.getElementById('dc-phone-dropdown');
        phoneFlag  = document.getElementById('dc-phone-flag');
        codeVal    = document.getElementById('dc-phone-code-val');
        phoneSearch= document.getElementById('dc-phone-search');
        phoneList  = document.getElementById('dc-phone-list');
        submitBtn  = document.getElementById('dc-submit');
        successDiv = document.getElementById('dc-success');
    }

    function setLang(lang) {
        updateRefs();
        if (!wrap) return;

        currentLang = lang;
        try { localStorage.setItem('df_lang', lang); } catch(e) {}

        wrap.classList.remove('lang-ar', 'lang-en');
        wrap.classList.add('lang-' + lang);
        wrap.dir = lang === 'ar' ? 'rtl' : 'ltr';

        document.querySelectorAll('[data-ar],[data-en]').forEach(function (el) {
            var txt = el.getAttribute('data-' + lang);
            if (txt !== null) el.textContent = txt;
        });

        document.querySelectorAll('[data-placeholder-ar],[data-placeholder-en]').forEach(function (el) {
            var ph = el.getAttribute('data-placeholder-' + lang);
            if (ph !== null) el.placeholder = ph;
        });

        if (phoneSearch) phoneSearch.placeholder = T[lang].phoneSearch;

        document.querySelectorAll('.df-logo-ar').forEach(function (el) {
            el.style.display = lang === 'ar' ? 'block' : 'none';
        });
        document.querySelectorAll('.df-logo-en').forEach(function (el) {
            el.style.display = lang === 'en' ? 'block' : 'none';
        });

        document.querySelectorAll('.df-nav__lang-opt').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        buildPhoneList('');
    }

    function initLangDropdown() {
        var toggleBtn = document.getElementById('home-lang-toggle');
        var dropdown  = document.getElementById('home-lang-dropdown');
        if (!toggleBtn || !dropdown) return;

        toggleBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });

        dropdown.querySelectorAll('.df-nav__lang-opt').forEach(function (opt) {
            opt.addEventListener('click', function () {
                var lang = opt.getAttribute('data-lang');
                setLang(lang);
                dropdown.classList.remove('open');
            });
        });

        document.addEventListener('click', function () {
            dropdown.classList.remove('open');
        });
    }

    function initTabs() {
        tabs.forEach(function (tab) {
            tab.addEventListener('click', function () {
                var country = tab.getAttribute('data-country');

                tabs.forEach(function (t) { t.classList.remove('active'); });
                tab.classList.add('active');

                panels.forEach(function (p) {
                    p.classList.toggle('active', p.getAttribute('data-country') === country);
                });
            });
        });
    }

    function buildPhoneList(query) {
        if (!phoneList) return;
        phoneList.innerHTML = '';
        var q = query.toLowerCase().trim();
        COUNTRIES.forEach(function (c) {
            var nameEn = c.name.toLowerCase();
            var nameAr = c.nameAr;
            if (q && nameEn.indexOf(q) === -1 && nameAr.indexOf(q) === -1) return;

            var opt = document.createElement('div');
            opt.className = 'dc-phone-opt';
            var flagHtml = c.flag
                ? '<img class="dc-phone-opt__flag" src="' + c.flag + '" onerror="this.style.display=\'none\'" alt="' + c.iso + '">'
                : '<span style="width:20px;font-size:14px;">' + c.iso + '</span>';
            var displayName = currentLang === 'ar' ? c.nameAr : c.name;
            opt.innerHTML = flagHtml +
                '<span class="dc-phone-opt__name">' + displayName + '</span>' +
                '<span class="dc-phone-opt__code">' + c.code + '</span>';

            opt.addEventListener('click', function () {
                selectedCountryCode = c.code;
                selectedCountryFlag = c.flag || '';
                codeVal.textContent = c.code;
                if (phoneFlag) {
                    if (c.flag) {
                        phoneFlag.src = c.flag;
                        phoneFlag.style.display = '';
                    } else {
                        phoneFlag.style.display = 'none';
                    }
                }
                codeDrop.classList.remove('open');
                if (phoneSearch) phoneSearch.value = '';
                buildPhoneList('');
            });
            phoneList.appendChild(opt);
        });
    }

    function initPhoneDropdown() {
        if (!codeBtn || !codeDrop) return;

        buildPhoneList('');

        codeBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            codeDrop.classList.toggle('open');
            if (codeDrop.classList.contains('open') && phoneSearch) {
                phoneSearch.focus();
            }
        });

        if (phoneSearch) {
            phoneSearch.addEventListener('input', function () {
                buildPhoneList(phoneSearch.value);
            });
            phoneSearch.addEventListener('click', function (e) { e.stopPropagation(); });
        }

        document.addEventListener('click', function () {
            codeDrop.classList.remove('open');
        });
        codeDrop.addEventListener('click', function (e) { e.stopPropagation(); });
    }

    function initHamburger() {
        var ham = document.querySelector('.df-h-nav__ham');
        if (!ham) return;
        ham.addEventListener('click', function () {
            ham.classList.toggle('open');
        });
    }

    function initScrollShadow() {
        var nav = document.querySelector('.df-h-nav');
        if (!nav) return;
        window.addEventListener('scroll', function () {
            nav.classList.toggle('scrolled', window.scrollY > 10);
        }, { passive: true });
    }

    function initForm() {
        if (!submitBtn) return;
        submitBtn.addEventListener('click', function () {
            var name    = document.getElementById('dc-name');
            var email   = document.getElementById('dc-email');
            var subject = document.getElementById('dc-subject');
            var msg     = document.getElementById('dc-msg');

            var valid = true;
            [name, email, subject, msg].forEach(function (inp) {
                if (!inp) return;
                if (!inp.value.trim()) {
                    inp.style.borderColor = '#ef4444';
                    valid = false;
                } else {
                    inp.style.borderColor = '';
                }
            });
            if (!valid) return;

            submitBtn.classList.add('loading');
            setTimeout(function () {
                submitBtn.style.display = 'none';
                if (successDiv) {
                    successDiv.style.display = 'block';
                    var sp = successDiv.querySelector('p');
                    if (sp) sp.textContent = T[currentLang].successMsg;
                }
            }, 1200);
        });

        document.querySelectorAll('.dc-form-input').forEach(function (inp) {
            inp.addEventListener('input', function () {
                inp.style.borderColor = '';
            });
        });
    }

    function initReveal() {
        var els = document.querySelectorAll('.dc-info-card, .dc-form-card');
        if (!window.IntersectionObserver) {
            els.forEach(function (el) { el.style.opacity = '1'; });
            return;
        }
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.style.transition = 'opacity .5s ease, transform .5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        els.forEach(function (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(18px)';
            obs.observe(el);
        });
    }

    function init() {
        updateRefs();
        if (!wrap) return;

        initLangDropdown();
        initTabs();
        initPhoneDropdown();
        initHamburger();
        initScrollShadow();
        initForm();
        initReveal();

        var savedLang = 'ar';
        try { savedLang = localStorage.getItem('df_lang') || (wrap.classList.contains('lang-en')?'en':'ar'); } catch(e){}
        setLang(savedLang);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    document.addEventListener('page:update', init);

})();
