(function () {
    'use strict';

    var lang = 'en';

    function detectLang() {
        try {
            var stored = localStorage.getItem('df_lang');
            if (stored === 'en' || stored === 'ar') return stored;
        } catch (e) {}
        var hl = (document.documentElement.lang || '').toLowerCase();
        if (hl.startsWith('en')) return 'en';
        if (hl.startsWith('ar')) return 'ar';
        return (navigator.language || '').toLowerCase().startsWith('ar') ? 'ar' : 'en';
    }

    function applyLang(wrap) {
        var isAr = lang === 'ar';

        wrap.setAttribute('dir', isAr ? 'rtl' : 'ltr');
        document.documentElement.lang = lang;

        wrap.classList.toggle('lang-ar', isAr);
        wrap.classList.toggle('lang-en', !isAr);

        wrap.querySelectorAll('.df-logo-ar').forEach(function (el) {
            el.style.display = isAr ? 'block' : 'none';
        });
        wrap.querySelectorAll('.df-logo-en').forEach(function (el) {
            el.style.display = isAr ? 'none' : 'block';
        });

        wrap.querySelectorAll('[data-ar],[data-en]').forEach(function (el) {
            var text = isAr ? el.getAttribute('data-ar') : el.getAttribute('data-en');
            if (el.children.length === 0) {
                el.textContent = text;
            } else {
                var allBr = Array.from(el.children).every(function (c) { return c.tagName === 'BR'; });
                if (allBr) {
                    el.textContent = text;
                } else {
                    var replaced = false;
                    el.childNodes.forEach(function (node) {
                        if (!replaced && node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
                            node.textContent = text;
                            replaced = true;
                        }
                    });
                }
            }
        });

        var dropdown = wrap.querySelector('#home-lang-dropdown');
        if (dropdown) {
            dropdown.querySelectorAll('.df-nav__lang-opt').forEach(function (btn) {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });
        }

        wrap.querySelectorAll('.df-compliance-item').forEach(function (item) {
            item.style.display       = 'flex';
            item.style.flexDirection = 'row';
            item.style.alignItems    = 'center';
            item.style.gap           = '10px';
        });

        try { localStorage.setItem('df_lang', lang); } catch (e) {}
        if (typeof window.dfApplyLang === 'function') {
            window.dfApplyLang(lang);
        }
    }

    function initLangDropdown(wrap) {
        var toggleBtn = wrap.querySelector('#home-lang-toggle');
        var dropdown  = wrap.querySelector('#home-lang-dropdown');
        if (!toggleBtn || !dropdown) return;

        toggleBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            dropdown.classList.toggle('open');
        });

        dropdown.querySelectorAll('.df-nav__lang-opt').forEach(function (btn) {
            btn.addEventListener('click', function () {
                lang = btn.getAttribute('data-lang');
                dropdown.classList.remove('open');
                applyLang(wrap);
            });
        });

        document.addEventListener('click', function () {
            dropdown.classList.remove('open');
        });
    }

    function initNavScroll(wrap) {
        var nav = wrap.querySelector('.df-h-nav');
        if (!nav) return;
        window.addEventListener('scroll', function () {
            nav.classList.toggle('scrolled', window.scrollY > 20);
        });
    }

    function initCards(wrap) {
        wrap.querySelectorAll('.df-af-card').forEach(function (card) {
            card.addEventListener('focus', function () {
                card.style.outline = '2px solid var(--df-blue)';
                card.style.outlineOffset = '2px';
            });
            card.addEventListener('blur', function () {
                card.style.outline = '';
                card.style.outlineOffset = '';
            });
        });
    }

    function initReveal(wrap) {
        var items = wrap.querySelectorAll('.df-af-category');
        if (!items.length) return;

        if (!window.IntersectionObserver) {
            items.forEach(function (el) { el.style.opacity = 1; });
            return;
        }

        items.forEach(function (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = 'opacity .45s ease, transform .45s ease';
        });

        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    e.target.style.opacity = '1';
                    e.target.style.transform = 'translateY(0)';
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.08 });

        items.forEach(function (el) { obs.observe(el); });
    }

    function initAllFeatures() {
        var wrap = document.getElementById('df-feat-wrap');
        if (!wrap) return;

        lang = detectLang();
        initLangDropdown(wrap);
        applyLang(wrap);
        initNavScroll(wrap);
        initCards(wrap);
        initReveal(wrap);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAllFeatures);
    } else {
        initAllFeatures();
    }

    document.addEventListener('page:update', initAllFeatures);

})();
