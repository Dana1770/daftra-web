(function () {
    'use strict';

    var lang = 'ar';

    function detectLang() {
        try {
            var stored = localStorage.getItem('df_lang');
            if (stored === 'en' || stored === 'ar') return stored;
        } catch (e) {}
        var hl = (document.documentElement.lang || '').toLowerCase();
        if (hl.startsWith('en')) return 'en';
        if (hl.startsWith('ar')) return 'ar';
        return (navigator.language || '').toLowerCase().startsWith('en') ? 'en' : 'ar';
    }

    function applyLang(wrap) {
        if (!wrap) return;
        var isAr = lang === 'ar';

        wrap.setAttribute('dir', isAr ? 'rtl' : 'ltr');
        document.documentElement.lang = lang;

        wrap.classList.toggle('lang-ar', isAr);
        wrap.classList.toggle('lang-en', !isAr);

        var arLogos = wrap.querySelectorAll('.df-logo-ar, .inv-logo-ar');
        var enLogos = wrap.querySelectorAll('.df-logo-en, .inv-logo-en');

        arLogos.forEach(function (el) {
            if (el) el.style.display = isAr ? '' : 'none';
        });
        enLogos.forEach(function (el) {
            if (el) el.style.display = isAr ? 'none' : '';
        });

        wrap.querySelectorAll('[data-ar][data-en]').forEach(function (el) {
            if (!el) return;
            var text = isAr ? el.getAttribute('data-ar') : el.getAttribute('data-en');
            if (el.children.length === 0) {
                el.textContent = text;
            } else {
                var replaced = false;
                el.childNodes.forEach(function (node) {
                    if (!replaced && node && node.nodeType === Node.TEXT_NODE && node.textContent && node.textContent.trim()) {
                        node.textContent = text;
                        replaced = true;
                    }
                });
            }
        });

        wrap.querySelectorAll('.df-nav__lang-opt').forEach(function (btn) {
            if (btn) btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        var globe = wrap.querySelector('.inv-main-nav__globe');
        if (globe) {
            var lbl = globe.querySelector('.inv-lang-lbl');
            if (!lbl) {
                lbl = document.createElement('span');
                lbl.className = 'inv-lang-lbl';
                globe.appendChild(lbl);
            }
            lbl.textContent = isAr ? 'EN' : 'ع';
            globe.setAttribute('title', isAr ? 'Switch to English' : 'التبديل إلى العربية');
        }

        try { localStorage.setItem('df_lang', lang); } catch (e) {}
        if (typeof window.dfApplyLang === 'function') {
            window.dfApplyLang(lang);
        }
    }

    function initInvoicingPage() {
        var page = document.getElementById('inv-wrap');
        if (!page) return;

        lang = detectLang();
        applyLang(page);

        var langToggle = page.querySelector('#inv-lang-toggle');
        var langDropdown = page.querySelector('#inv-lang-dropdown');

        if (langToggle && langDropdown) {
            langToggle.addEventListener('click', function (e) {
                e.stopPropagation();
                if (langDropdown) langDropdown.classList.toggle('open');
            });

            var langOpts = langDropdown.querySelectorAll('.df-nav__lang-opt');
            langOpts.forEach(function (btn) {
                btn.addEventListener('click', function () {
                    lang = btn.getAttribute('data-lang');
                    if (langDropdown) langDropdown.classList.remove('open');
                    applyLang(page);
                });
            });

            document.addEventListener('click', function () {
                if (langDropdown) langDropdown.classList.remove('open');
            });
        }

        var _origApply = applyLang;
        applyLang = function (wrap) {
            _origApply(wrap);
            if (langDropdown) {
                var opts = langDropdown.querySelectorAll('.df-nav__lang-opt');
                opts.forEach(function (btn) {
                    if (btn) btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
                });
            }
        };

        var tabBtns = page.querySelectorAll('.inv-tab-btn');
        var tabPanes = page.querySelectorAll('.inv-tab-pane');

        tabBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                tabBtns.forEach(function (b) { b.classList.remove('active'); });
                tabPanes.forEach(function (p) { p.classList.remove('active'); });
                btn.classList.add('active');
                var pane = page.querySelector('#inv-tab-' + btn.getAttribute('data-tab'));
                if (pane) pane.classList.add('active');
            });
        });

        var faqHeaders = page.querySelectorAll('.inv-faq-header');
        faqHeaders.forEach(function (header) {
            header.addEventListener('click', function () {
                var item = header.parentElement;
                if (!item) return;
                var wasOpen = item.classList.contains('open');
                var allFaqs = page.querySelectorAll('.inv-faq-item');
                allFaqs.forEach(function (f) {
                    f.classList.remove('open');
                    var ic = f.querySelector('.inv-faq-icon');
                    if (ic) ic.textContent = '▾';
                });
                if (!wasOpen) {
                    item.classList.add('open');
                    var ic = header.querySelector('.inv-faq-icon');
                    if (ic) ic.textContent = '▴';
                }
            });
        });

        var firstFaq = page.querySelector('.inv-faq-item');
        if (firstFaq) {
            firstFaq.classList.add('open');
            var ic = firstFaq.querySelector('.inv-faq-icon');
            if (ic) ic.textContent = '▴';
        }

        if (window.IntersectionObserver) {
            var obs = new IntersectionObserver(function (entries) {
                entries.forEach(function (e) {
                    if (e.isIntersecting) {
                        e.target.classList.add('inv-vis');
                        obs.unobserve(e.target);
                    }
                });
            }, { threshold: 0.07 });
            var fadeElements = page.querySelectorAll('.inv-fade-up');
            fadeElements.forEach(function (el) { obs.observe(el); });
        } else {
            var fades = page.querySelectorAll('.inv-fade-up');
            fades.forEach(function (el) { el.classList.add('inv-vis'); });
        }

        var slider = page.querySelector('#inv-biz-slider');
        var track = page.querySelector('#inv-biz-track');

        if (slider && track) {
            var slides = track.querySelectorAll('.inv-biz-slide');
            var dotsContainer = page.querySelector('#inv-biz-dots');
            var total = slides.length;
            var cur = 0;
            var bizTimer = null;
            var dragStartX = 0;
            var isDragging = false;
            var isInitialized = false;

            if (dotsContainer && dotsContainer.children.length === 0 && total > 0) {
                for (var i = 0; i < total; i++) {
                    var dot = document.createElement('div');
                    dot.className = 'inv-biz-dot';
                    if (i === 0) dot.classList.add('active');
                    dotsContainer.appendChild(dot);
                }
            }
            var dots = dotsContainer ? dotsContainer.querySelectorAll('.inv-biz-dot') : [];

            function getSlideWidth() {
                if (!slider) return 600;
                var w = slider.offsetWidth;
                if (w === 0 || isNaN(w) || w < 100) {
                    w = slider.parentElement ? slider.parentElement.offsetWidth : 600;
                }
                if (w === 0 || isNaN(w)) w = 600;
                return w;
            }

            function initSlideDimensions() {
                if (!slides.length) return;
                var w = getSlideWidth();
                slides.forEach(function(slide) {
                    if (slide) {
                        slide.style.width = w + 'px';
                        slide.style.flex = '0 0 ' + w + 'px';
                        var img = slide.querySelector('img');
                        if (img) {
                            img.style.width = '100%';
                            img.style.height = '100%';
                            img.style.objectFit = 'cover';
                        }
                    }
                });
                if (track) track.style.width = (w * total) + 'px';
                goToSlide(cur, false);
            }

            function goToSlide(n, withTransition) {
                if (!track) return;
                cur = ((n % total) + total) % total;
                var w = getSlideWidth();
                if (withTransition !== false) {
                    track.style.transition = 'transform 0.5s ease';
                } else {
                    track.style.transition = 'none';
                }
                track.style.transform = 'translateX(-' + (cur * w) + 'px)';

                if (dots && dots.length) {
                    dots.forEach(function(d, i) {
                        if (d) d.classList.toggle('active', i === cur);
                    });
                }
            }

            function startAutoPlay() {
                if (bizTimer) clearInterval(bizTimer);
                bizTimer = setInterval(function() {
                    goToSlide(cur + 1, true);
                }, 4000);
            }

            function stopAutoPlay() {
                if (bizTimer) {
                    clearInterval(bizTimer);
                    bizTimer = null;
                }
            }

            if (dots && dots.length) {
                dots.forEach(function(dot, idx) {
                    dot.addEventListener('click', function(e) {
                        e.stopPropagation();
                        stopAutoPlay();
                        goToSlide(idx, true);
                        startAutoPlay();
                    });
                });
            }

            if (slider) {
                slider.addEventListener('mousedown', function(e) {
                    isDragging = true;
                    dragStartX = e.clientX;
                    if (track) track.style.transition = 'none';
                    stopAutoPlay();
                    e.preventDefault();
                });
            }

            window.addEventListener('mousemove', function(e) {
                if (!isDragging || !track) return;
                var w = getSlideWidth();
                var dragDelta = dragStartX - e.clientX;
                track.style.transform = 'translateX(-' + (cur * w + dragDelta) + 'px)';
            });

            window.addEventListener('mouseup', function(e) {
                if (!isDragging) return;
                isDragging = false;
                var w = getSlideWidth();
                var dragDelta = dragStartX - e.clientX;
                if (Math.abs(dragDelta) > 60) {
                    if (dragDelta > 0) {
                        goToSlide(cur + 1, true);
                    } else {
                        goToSlide(cur - 1, true);
                    }
                } else {
                    goToSlide(cur, true);
                }
                startAutoPlay();
            });

            if (slider) {
                slider.addEventListener('mouseenter', function() {
                    stopAutoPlay();
                });

                slider.addEventListener('mouseleave', function() {
                    startAutoPlay();
                });

                slider.addEventListener('touchstart', function(e) {
                    dragStartX = e.touches[0].clientX;
                    if (track) track.style.transition = 'none';
                    stopAutoPlay();
                }, { passive: true });

                slider.addEventListener('touchmove', function(e) {
                    if (!track) return;
                    var w = getSlideWidth();
                    var dragDelta = dragStartX - e.touches[0].clientX;
                    track.style.transform = 'translateX(-' + (cur * w + dragDelta) + 'px)';
                }, { passive: true });

                slider.addEventListener('touchend', function(e) {
                    var w = getSlideWidth();
                    var dragDelta = dragStartX - e.changedTouches[0].clientX;
                    if (Math.abs(dragDelta) > 40) {
                        if (dragDelta > 0) {
                            goToSlide(cur + 1, true);
                        } else {
                            goToSlide(cur - 1, true);
                        }
                    } else {
                        goToSlide(cur, true);
                    }
                    startAutoPlay();
                });
            }

            var prevBtn = page.querySelector('#inv-biz-cursor-prev');
            var nextBtn = page.querySelector('#inv-biz-cursor-next');

            if (prevBtn) {
                prevBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    stopAutoPlay();
                    goToSlide(cur - 1, true);
                    startAutoPlay();
                });
            }

            if (nextBtn) {
                nextBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    stopAutoPlay();
                    goToSlide(cur + 1, true);
                    startAutoPlay();
                });
            }

            var resizeTimeout;
            window.addEventListener('resize', function() {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(function() {
                    initSlideDimensions();
                    goToSlide(cur, false);
                }, 150);
            });

            var allImages = track ? track.querySelectorAll('img') : [];
            var imagesLoaded = 0;
            var totalImages = allImages.length;

            function onImageLoaded() {
                imagesLoaded++;
                if (imagesLoaded >= totalImages && !isInitialized) {
                    isInitialized = true;
                    setTimeout(function() {
                        initSlideDimensions();
                        startAutoPlay();
                    }, 100);
                }
            }

            if (totalImages === 0) {
                initSlideDimensions();
                startAutoPlay();
                isInitialized = true;
            } else {
                allImages.forEach(function(img) {
                    if (img.complete && img.naturalWidth > 0) {
                        onImageLoaded();
                    } else {
                        img.addEventListener('load', onImageLoaded);
                        img.addEventListener('error', onImageLoaded);
                    }
                });
                setTimeout(function() {
                    if (!isInitialized) {
                        isInitialized = true;
                        initSlideDimensions();
                        startAutoPlay();
                    }
                }, 1000);
            }
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initInvoicingPage);
    } else {
        initInvoicingPage();
    }
    document.addEventListener('page:update', initInvoicingPage);

}());