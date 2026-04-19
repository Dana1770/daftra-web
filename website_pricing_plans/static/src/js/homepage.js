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
            el.style.display = isAr ? '' : 'none';
        });
        wrap.querySelectorAll('.df-logo-en').forEach(function (el) {
            el.style.display = isAr ? 'none' : '';
        });

        wrap.querySelectorAll('[data-ar],[data-en]').forEach(function (el) {
            var text = isAr ? el.getAttribute('data-ar') : el.getAttribute('data-en');
            if (!text) return;

            if (el.tagName === 'H1' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'H4' || el.classList.contains('df-foot-compat')) {
                 el.innerHTML = text.replace(/\n/g, '<br/>');
            } else {
                 el.textContent = text;
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

    function initAccordionHover(wrap) {

        wrap.querySelectorAll('.df-acc').forEach(function (acc) {
            var first = acc.querySelector('.df-acc__it');
            if (first) first.classList.add('active');

            var feat     = acc.closest('.df-h-feat');
            if (!feat) return;
            var mockWrap = feat.querySelector('.df-mock-wrap');
            if (!mockWrap) return;
            var mocks    = mockWrap.querySelectorAll('.df-mock');
            if (mocks.length) mocks[0].classList.add('df-mock--active');
        });

        wrap.addEventListener('mouseenter', function (ev) {
            var item = ev.target.closest('.df-acc__it');
            if (!item) return;

            var acc  = item.parentElement;
            var feat = acc.closest('.df-h-feat');
            if (!feat) return;

            acc.querySelectorAll('.df-acc__it').forEach(function (i) {
                i.classList.remove('active');
            });
            item.classList.add('active');

            var mockWrap = feat.querySelector('.df-mock-wrap');
            if (!mockWrap) return;
            var idx   = Array.from(acc.querySelectorAll('.df-acc__it')).indexOf(item);
            mockWrap.querySelectorAll('.df-mock').forEach(function (m, i) {
                m.classList.toggle('df-mock--active', i === idx);
            });
        }, true);

        wrap.addEventListener('click', function (ev) {
            var btn = ev.target.closest('.df-acc__hd');
            if (!btn) return;
            ev.preventDefault();

            var item = btn.parentElement;
            var acc  = item.parentElement;
            var feat = acc.closest('.df-h-feat');
            if (!feat) return;

            acc.querySelectorAll('.df-acc__it').forEach(function (i) { i.classList.remove('active'); });
            item.classList.add('active');

            var mockWrap = feat.querySelector('.df-mock-wrap');
            if (!mockWrap) return;
            var idx = Array.from(acc.querySelectorAll('.df-acc__it')).indexOf(item);
            mockWrap.querySelectorAll('.df-mock').forEach(function (m, i) {
                m.classList.toggle('df-mock--active', i === idx);
            });
        });
    }

function initIndustrySlider(wrap) {
    var slider = wrap.querySelector('#inv-biz-slider');
    var track = wrap.querySelector('#inv-biz-track');
    var slides = wrap.querySelectorAll('#inv-biz-slider .inv-biz-slide');
    var dotsContainer = wrap.querySelector('#inv-biz-dots');

    if (!slider || !track || slides.length === 0) return;

    var cur = 0;
    var autoPlayTimer = null;

    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        slides.forEach(function(_, i) {
            var dot = document.createElement('span');
            dot.className = 'inv-biz-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', function() {
                stopAuto();
                go(i);
                startAuto();
            });
            dotsContainer.appendChild(dot);
        });
    }

    var dots = dotsContainer ? dotsContainer.querySelectorAll('.inv-biz-dot') : [];

    function setSlideWidth() {
        var slideWidth = slider.offsetWidth;

        slides.forEach(function(slide) {
            slide.style.width = slideWidth + 'px';
            slide.style.margin = '0';
        });

        return slideWidth;
    }

    function go(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        cur = index;

        var slideWidth = slider.offsetWidth;
        var isRtl = (document.documentElement.dir === 'rtl' || wrap.getAttribute('dir') === 'rtl');
        var offset = isRtl ? (cur * slideWidth) : -(cur * slideWidth);

        track.style.transform = 'translateX(' + offset + 'px)';

        slides.forEach(function(s, i) {
            s.classList.toggle('active', i === cur);
        });

        if (dots.length) {
            dots.forEach(function(d, i) {
                if (d) d.classList.toggle('active', i === cur);
            });
        }
    }

    function startAuto() {
        if (autoPlayTimer) return;
        if (slides.length > 1) {
            autoPlayTimer = setInterval(function() {
                go(cur + 1);
            }, 4000);
        }
    }

    function stopAuto() {
        if (autoPlayTimer) {
            clearInterval(autoPlayTimer);
            autoPlayTimer = null;
        }
    }

    var prevBtn = wrap.querySelector('#inv-biz-cursor-prev');
    var nextBtn = wrap.querySelector('#inv-biz-cursor-next');

    if (prevBtn) {
        prevBtn.onclick = function(e) {
            e.stopPropagation();
            stopAuto();
            go(cur - 1);
            startAuto();
        };
    }

    if (nextBtn) {
        nextBtn.onclick = function(e) {
            e.stopPropagation();
            stopAuto();
            go(cur + 1);
            startAuto();
        };
    }

    var touchStartX = 0;

    slider.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        stopAuto();
    }, { passive: true });

    slider.addEventListener('touchend', function(e) {
        var touchEndX = e.changedTouches[0].screenX;
        var diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                go(cur - 1);
            } else {
                go(cur + 1);
            }
        }
        startAuto();
    }, { passive: true });

    slider.addEventListener('mouseenter', stopAuto);
    slider.addEventListener('mouseleave', startAuto);

    var resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            setSlideWidth();
            go(cur);
        }, 150);
    });

    setSlideWidth();
    setTimeout(function() {
        go(0);
        startAuto();
    }, 100);
}

    function initReveal(wrap) {
        var els = wrap.querySelectorAll('.df-reveal');
        if (!els.length) return;
        if (!window.IntersectionObserver) {
            els.forEach(function (el) { el.classList.add('visible'); });
            return;
        }
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
            });
        }, { threshold: 0.12 });
        els.forEach(function (el) { obs.observe(el); });
    }

    function initCounters(wrap) {
        var counters = wrap.querySelectorAll('.df-scard__n');
        if (!counters.length || !window.IntersectionObserver) return;
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) {
                    var el     = e.target;
                    var target = parseInt(el.dataset.target, 10);
                    var suffix = el.dataset.suffix || '';
                    var current = 0;
                    var step    = Math.max(1, Math.floor(target / 60));
                    var timer   = setInterval(function () {
                        current += step;
                        if (current >= target) { current = target; clearInterval(timer); }
                        el.textContent = current.toLocaleString() + suffix;
                    }, 20);
                    obs.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach(function (c) { obs.observe(c); });
    }

    function initNavScroll(wrap) {
        var nav = wrap.querySelector('.df-h-nav');
        if (!nav) return;
        window.addEventListener('scroll', function () {
            nav.classList.toggle('scrolled', window.scrollY > 20);
        });
    }

    function initMobileAccordion(wrap) {

        function switchMobileMock(mockId) {
            var container = wrap.querySelector('#mobile-mockup-container');
            if (!container) return;

            container.querySelectorAll('.mobile-mock-content').forEach(function(mock) {
                mock.classList.remove('active-mock');
            });

            var activeMock = container.querySelector('#' + mockId);
            if (activeMock) {
                activeMock.classList.add('active-mock');
            }
        }

        function activateAccordionItem(item) {
            if (!item) return;
            var acc = item.parentElement;

            acc.querySelectorAll('.df-mobile__it').forEach(function(i) {
                i.classList.remove('df-mobile__it--open');
            });

            item.classList.add('df-mobile__it--open');

            var mockId = item.getAttribute('data-mobile-mock');
            if (mockId) {
                switchMobileMock(mockId);
            }
        }

        var firstItem = wrap.querySelector('.df-mobile__it');
        if (firstItem) {
            activateAccordionItem(firstItem);
        }

        wrap.addEventListener('mouseenter', function(ev) {
            var item = ev.target.closest('.df-mobile__it');
            if (!item) return;

            var acc = item.parentElement;
            var isAlreadyActive = item.classList.contains('df-mobile__it--open');

            if (!isAlreadyActive) {
                activateAccordionItem(item);
            }
        }, true);

        wrap.addEventListener('click', function(ev) {
            var btn = ev.target.closest('.df-mobile__hd');
            if (!btn) return;
            ev.preventDefault();

            var item = btn.closest('.df-mobile__it');
            if (item) {
                var isOpen = item.classList.contains('df-mobile__it--open');
                if (!isOpen) {
                    activateAccordionItem(item);
                }
            }
        });
    }

    function initHomepage() {
        var wrap = document.getElementById('df-home-wrap');
        if (!wrap) return;

        lang = detectLang();
        initLangDropdown(wrap);
        applyLang(wrap);
        initAccordionHover(wrap);
        initMobileAccordion(wrap);
        initIndustrySlider(wrap);
        initReveal(wrap);
        initCounters(wrap);
        initNavScroll(wrap);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHomepage);
    } else {
        initHomepage();
    }
    document.addEventListener('page:update', initHomepage);

})();