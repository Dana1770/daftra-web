/* ============================================================
   PERFUME STORES PAGE JavaScript — perfume.js
   ============================================================ */
(function () {
    'use strict';

    /* ── Language switcher ─────────────────────────────────── */
    function initLang() {
        var wrap = document.getElementById('df-perfume-wrap');
        if (!wrap) return;

        var saved = 'ar';
        try { var s = localStorage.getItem('df_lang'); if (s === 'en' || s === 'ar') saved = s; } catch (e) {}
        applyLang(saved, wrap);

        document.addEventListener('click', function (e) {
            var btn = e.target.closest('[data-perfume-lang]');
            if (!btn) return;
            var l = btn.getAttribute('data-perfume-lang');
            if (!l) return;
            try { localStorage.setItem('df_lang', l); } catch (e) {}
            applyLang(l, wrap);
        });
    }

    function applyLang(lang, wrap) {
        wrap.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        wrap.classList.remove('lang-en', 'lang-ar');
        wrap.classList.add('lang-' + lang);

        wrap.querySelectorAll('[data-ar][data-en]').forEach(function (el) {
            el.textContent = el.getAttribute('data-' + lang) || el.textContent;
        });
        wrap.querySelectorAll('[data-ar-href][data-en-href]').forEach(function (el) {
            el.setAttribute('href', el.getAttribute('data-' + lang + '-href') || '#');
        });
        wrap.querySelectorAll('.df-logo-ar').forEach(function (el) {
            el.style.display = lang === 'ar' ? 'block' : 'none';
        });
        wrap.querySelectorAll('.df-logo-en').forEach(function (el) {
            el.style.display = lang === 'en' ? 'block' : 'none';
        });
    }

    /* ── Scroll reveal ─────────────────────────────────────── */
    function initScrollReveal() {
        var els = document.querySelectorAll(
            '#df-perfume-wrap .df-p-anim, #df-perfume-wrap .df-p-anim--left, #df-perfume-wrap .df-p-anim--right'
        );
        if (!els.length) return;

        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('df-p-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        els.forEach(function (el) { io.observe(el); });
    }

    /* ── FAQ accordion ─────────────────────────────────────── */
    function initFAQ() {
        var items = document.querySelectorAll('#df-perfume-wrap .df-p-faq__item');
        items.forEach(function (item) {
            var btn = item.querySelector('.df-p-faq__q');
            if (!btn) return;
            btn.addEventListener('click', function () {
                var isOpen = item.classList.contains('df-p-open');
                items.forEach(function (i) { i.classList.remove('df-p-open'); });
                if (!isOpen) item.classList.add('df-p-open');
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
        var counters = document.querySelectorAll('#df-perfume-wrap [data-count]');
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
        document.querySelectorAll('#df-perfume-wrap a[href^="#"]').forEach(function (a) {
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
        var links = document.querySelectorAll('#df-perfume-wrap .df-p-subnav__link');
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
            var scrollY = window.scrollY + 120;
            var active = sections[0];
            sections.forEach(function (s) {
                if (s.el.offsetTop <= scrollY) active = s;
            });
            links.forEach(function (l) { l.classList.remove('df-p-subnav__link--active'); });
            if (active) active.link.classList.add('df-p-subnav__link--active');
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
