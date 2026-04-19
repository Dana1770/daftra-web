/* ============================================================
   RETAIL PAGE JavaScript — retail.js
   ============================================================ */
(function () {
    'use strict';

    /* ── Language switcher ─────────────────────────────────── */
    function initLang() {
        var wrap = document.getElementById('df-retail-wrap');
        if (!wrap) return;

        var saved = 'ar';
        try { var s = localStorage.getItem('df_lang'); if (s === 'en' || s === 'ar') saved = s; } catch (e) {}
        applyLang(saved, wrap);

        document.addEventListener('click', function (e) {
            var btn = e.target.closest('[data-retail-lang]');
            if (!btn) return;
            var l = btn.getAttribute('data-retail-lang');
            if (!l) return;
            try { localStorage.setItem('df_lang', l); } catch (e) {}
            applyLang(l, wrap);
        });
    }

    function applyLang(lang, wrap) {
        wrap.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        wrap.classList.remove('lang-en', 'lang-ar');
        wrap.classList.add('lang-' + lang);

        /* Text nodes */
        wrap.querySelectorAll('[data-ar][data-en]').forEach(function (el) {
            el.textContent = el.getAttribute('data-' + lang) || el.textContent;
        });

        /* Href attributes */
        wrap.querySelectorAll('[data-ar-href][data-en-href]').forEach(function (el) {
            el.setAttribute('href', el.getAttribute('data-' + lang + '-href') || '#');
        });

        /* Logo toggle */
        wrap.querySelectorAll('.df-logo-ar').forEach(function (el) {
            el.style.display = lang === 'ar' ? 'block' : 'none';
        });
        wrap.querySelectorAll('.df-logo-en').forEach(function (el) {
            el.style.display = lang === 'en' ? 'block' : 'none';
        });

        /* Arrow direction — flip left-arrow icon for LTR */
        wrap.querySelectorAll('.df-r-btn-split .btn-arrow svg, .df-r-feat__link-secondary .btn-arrow svg').forEach(function (svg) {
            svg.style.transform = lang === 'en' ? 'scaleX(-1)' : 'none';
        });
    }

    /* ── Scroll reveal ─────────────────────────────────────── */
    function initScrollReveal() {
        var els = document.querySelectorAll(
            '#df-retail-wrap .df-r-anim, ' +
            '#df-retail-wrap .df-r-anim--left, ' +
            '#df-retail-wrap .df-r-anim--right'
        );
        if (!els.length) return;

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('df-r-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        els.forEach(function (el) { io.observe(el); });
    }

    /* ── FAQ accordion ─────────────────────────────────────── */
    function initFAQ() {
        var items = document.querySelectorAll('#df-retail-wrap .df-r-faq__item');
        items.forEach(function (item) {
            var btn = item.querySelector('.df-r-faq__q');
            if (!btn) return;
            btn.addEventListener('click', function () {
                var isOpen = item.classList.contains('df-r-open');
                /* Close all */
                items.forEach(function (i) { i.classList.remove('df-r-open'); });
                /* Toggle clicked */
                if (!isOpen) item.classList.add('df-r-open');
            });
        });
    }

    /* ── Counter animations ────────────────────────────────── */
    function animateCounter(el, target, duration) {
        var start = 0;
        var startTime = null;
        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = Math.min((timestamp - startTime) / duration, 1);
            var val = Math.round(progress * target);
            el.textContent = val.toLocaleString() + (el.dataset.suffix || '');
            if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    function initCounters() {
        var counters = document.querySelectorAll('#df-retail-wrap [data-count]');
        if (!counters.length) return;
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    var target = parseInt(el.getAttribute('data-count'), 10);
                    animateCounter(el, target, 1800);
                    io.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(function (el) { io.observe(el); });
    }

    /* ── Smooth nav scroll ─────────────────────────────────── */
    function initSmoothScroll() {
        document.querySelectorAll('#df-retail-wrap a[href^="#"]').forEach(function (a) {
            a.addEventListener('click', function (e) {
                var id = a.getAttribute('href').slice(1);
                if (!id) return;
                var target = document.getElementById(id);
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    /* ── Sticky nav highlight ──────────────────────────────── */
    function initNavHighlight() {
        var links = document.querySelectorAll('.df-r-subnav__link');
        if (!links.length) return;
        var sections = [];
        links.forEach(function (l) {
            var id = l.getAttribute('href');
            if (id && id.startsWith('#')) {
                var el = document.getElementById(id.slice(1));
                if (el) sections.push({ el: el, link: l });
            }
        });
        if (!sections.length) return;

        window.addEventListener('scroll', function () {
            var scrollY = window.scrollY + 140;
            var active = sections[0];
            sections.forEach(function (s) {
                if (s.el.offsetTop <= scrollY) active = s;
            });
            links.forEach(function (l) { l.classList.remove('df-r-subnav__link--active'); });
            if (active) active.link.classList.add('df-r-subnav__link--active');
        }, { passive: true });
    }

    /* ── Init ──────────────────────────────────────────────── */
    function init() {
        initLang();
        initScrollReveal();
        initFAQ();
        initCounters();
        initSmoothScroll();
        initNavHighlight();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
