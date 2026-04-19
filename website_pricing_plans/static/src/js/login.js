(function () {
    'use strict';

    function lnInit() {
        var eyeBtn = document.getElementById('ln-eye');
        var passEl = document.getElementById('ln-pass');
        if (eyeBtn && passEl) {
            eyeBtn.addEventListener('click', function () {
                passEl.type = passEl.type === 'password' ? 'text' : 'password';
            });
        }
        var btn = document.getElementById('ln-btn');
        if (btn) {
            btn.addEventListener('click', function () {
                var email = document.getElementById('ln-email');
                var pass = document.getElementById('ln-pass');
                var valid = true;
                if (!email || !email.value.trim()) { if (email) email.style.borderColor = '#ef4444'; valid = false; } else if (email) email.style.borderColor = '';
                if (!pass || !pass.value) { if (pass) pass.style.borderColor = '#ef4444'; valid = false; } else if (pass) pass.style.borderColor = '';
                if (!valid) return;
                this.textContent = 'Signing in...';
                this.style.opacity = '0.7';
                this.disabled = true;
                var self = this;
                setTimeout(function () { self.textContent = 'Sign in'; self.style.opacity = '1'; self.disabled = false; }, 2000);
            });
        }
        var emailEl = document.getElementById('ln-email');
        var passEl2 = document.getElementById('ln-pass');
        if (emailEl) emailEl.addEventListener('input', function () { this.style.borderColor = ''; });
        if (passEl2) passEl2.addEventListener('input', function () { this.style.borderColor = ''; });
    }

    function wlInit() {
        var subEl = document.getElementById('wl-subdomain');
        if (subEl) {
            var params = new URLSearchParams(window.location.search);
            var sub = params.get('subdomain');
            if (sub && sub.trim()) subEl.textContent = sub.trim();
        }

        var copyBtn = document.getElementById('wl-copy');
        if (copyBtn) {
            copyBtn.addEventListener('click', function () {
                var urlBox = document.getElementById('wl-url');
                var txt = document.getElementById('wl-copy-txt');
                if (!urlBox) return;
                var url = urlBox.textContent.trim();
                var btn = this;
                function onCopied() {
                    btn.classList.add('copied');
                    if (txt) txt.textContent = 'Copied!';
                    setTimeout(function () { btn.classList.remove('copied'); if (txt) txt.textContent = 'Copy'; }, 2000);
                }
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(url).then(onCopied);
                } else {
                    var el = document.createElement('textarea');
                    el.value = url; document.body.appendChild(el); el.select();
                    try { document.execCommand('copy'); } catch(e) {}
                    document.body.removeChild(el);
                    onCopied();
                }
            });
        }

        var nextBtn = document.getElementById('wl-next');
        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                var fn = document.getElementById('wl-fname');
                var ln = document.getElementById('wl-lname');
                var pos = document.getElementById('wl-pos');
                var sz = document.getElementById('wl-size');
                var valid = true;
                [fn, ln].forEach(function (el) {
                    if (!el || !el.value.trim()) { if (el) el.style.borderColor = '#ef4444'; valid = false; }
                    else if (el) el.style.borderColor = '';
                });
                [pos, sz].forEach(function (el) {
                    if (!el || !el.value) { if (el) el.style.borderColor = '#ef4444'; valid = false; }
                    else if (el) el.style.borderColor = '';
                });
                if (!valid) return;
                this.textContent = 'Setting up...';
                this.style.opacity = '0.7';
                this.disabled = true;
                setTimeout(function () { window.location.href = '/'; }, 1500);
            });
        }

        [document.getElementById('wl-fname'), document.getElementById('wl-lname'),
         document.getElementById('wl-pos'), document.getElementById('wl-size')].forEach(function (el) {
            if (el) el.addEventListener('change', function () { this.style.borderColor = ''; });
            if (el) el.addEventListener('input', function () { this.style.borderColor = ''; });
        });
    }

    function init() {
        lnInit();
        wlInit();
    }

    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', init); } else { init(); }
    document.addEventListener('page:update', init);
}());

(function() {
    'use strict';

    var ICONS = {
        'Shops Management':      '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
        'Clothes Shop':          '<path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z"/>',
        'Pharmacy':              '<path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 3H9a2 2 0 0 0-2 2v4h12V5a2 2 0 0 0-2-2z"/><path d="M13 14l-2-2m0 0l-2-2m2 2l-2 2m2-2l2 2"/>',
        'Eyewear Stores':        '<circle cx="6" cy="15" r="4"/><circle cx="18" cy="15" r="4"/><path d="M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"/><path d="M2.5 13S5 7 12 7s9.5 6 9.5 6"/>',
        'Perfume Shops':         '<path d="M9 3h6v2H9z"/><path d="M12 5v3"/><path d="M5 8h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><path d="M9 13h6M9 17h6"/>',
        'Mobile Shops':          '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
        'Computer Shop':         '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>',
        'Ceramic Stores':        '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>',
        'Automotive OEM Parts':  '<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>',
        'Bakery & Pastry':       '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>',
        'Jewelry Shops':         '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
        'Paint Shop':            '<path d="M19 11c0 5-7 11-7 11S5 16 5 11a7 7 0 0 1 14 0z"/><circle cx="12" cy="11" r="3"/>',
        'Book Stores':           '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
        'Online Store Management':'<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
        'Law Firm':              '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
        'Printing and Advertising Companies': '<rect x="3" y="4" width="18" height="10" rx="2"/><line x1="7" y1="20" x2="17" y2="20"/><line x1="9" y1="16" x2="15" y2="16"/>',
        'Accounting and Auditing Offices': '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
        'Marketing Companies Management': '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
        'Consulting Offices':    '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        'Co-Workspaces Management': '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
        'Recruitment Office':    '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>',
        'Hosting & Website Development': '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
        'Translation Centers Management': '<path d="M5 8l6 6"/><path d="M4 14l6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="M22 22l-5-10-5 10"/><path d="M14 18h6"/>',
        'Car Maintenance':       '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
        'Maintenance Centers and Technical Support': '<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>',
        'Devices and Equipment Maintenance': '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>',
        'Air Conditioning Centers': '<path d="M8 16l-1.447.724a1 1 0 0 1-1.341-.447l-.894-1.789A1 1 0 0 1 5.236 13H19a1 1 0 0 1 .948 1.316l-.894 2.684A1 1 0 0 1 18.106 18H8z"/><path d="M12 2v11"/><path d="M8 6l4-4 4 4"/>',
        'Laundry and Dry Cleaning': '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>',
        'Water Filters Companies': '<path d="M12 2v6"/><path d="M5 10H2a10 10 0 0 0 20 0h-3"/><path d="M12 8a4 4 0 0 1 4 4"/>',
        'Equipment Rental Management': '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
        'Furniture Workshop':    '<path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M6 7V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2"/>',
        'Cleaning Agencies':     '<path d="M3 22v-20l18 10-18 10z"/>',
        'Landscaping':           '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>',
        'Manufactures Management': '<path d="M2 20h20"/><path d="M5 20V8l7-5 7 5v12"/><path d="M9 20v-8h6v8"/>',
        'Medical Centers / Clinics': '<path d="M8 2h8"/><path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"/><path d="M7 15h10"/>',
        'Medicine Company':      '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
        'Dental Clinic':         '<path d="M12 5.5C10 3.5 6 3 4 6c-2 3 0 6 2 8 1.5 1.5 3 2.5 6 2.5s4.5-1 6-2.5c2-2 4-5 2-8-2-3-6-2.5-8-.5z"/>',
        'Pediatric Clinic':      '<path d="M9 12l2 2 4-4"/><path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7z"/>',
        'Obstetrics & Gynecology Clinics': '<circle cx="12" cy="8" r="5"/><path d="M12 13v9"/><path d="M9 19h6"/>',
        'Medical Analysis Laboratories': '<path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2"/><path d="M8.5 2h7"/><path d="M14.5 16h-5"/>',
        'Trading and Supply Chains': '<path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect x="9" y="11" width="14" height="10" rx="1"/><line x1="13" y1="16" x2="17" y2="16"/>',
        'Import and Export Agencies': '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
        'Tourism Companies':     '<circle cx="12" cy="10" r="3"/><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z"/>',
        'Hotels Management':     '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
        'Transportation and Trips': '<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
        'Beauty Salons':         '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
        'Gym':                   '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/>',
        'Education Centers':     '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
        'Incubation Centers':    '<circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>',
        'Car Gallery':           '<path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0"/><path d="M5 17H3v-6l2-5h12l2 5v6h-2m-4 0H9"/>',
        'Automotive OEM Parts':  '<circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>',
        'Car Rental Management': '<path d="M19 17H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11l3 4v7a2 2 0 0 1-2 2z"/><circle cx="7" cy="17" r="1"/><circle cx="17" cy="17" r="1"/>',
        'Construction and contracting': '<path d="M2 20h20"/><rect x="4" y="14" width="4" height="6"/><rect x="10" y="10" width="4" height="10"/><rect x="16" y="6" width="4" height="14"/>',
        'Real Estate Investment': '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    };

    var INDUSTRIES = {
        pos:           { name: 'POS & Retail',               subs: ['Shops Management','Clothes Shop','Pharmacy','Eyewear Stores','Perfume Shops','Mobile Shops','Computer Shop','Ceramic Stores','Automotive OEM Parts','Bakery & Pastry','Jewelry Shops','Paint Shop','Book Stores','Online Store Management'] },
        business:      { name: 'Business Services',          subs: ['Law Firm','Printing and Advertising Companies','Accounting and Auditing Offices','Marketing Companies Management','Consulting Offices','Co-Workspaces Management','Recruitment Office','Hosting & Website Development','Translation Centers Management'] },
        professional:  { name: 'Professional Services',      subs: ['Car Maintenance','Maintenance Centers and Technical Support','Devices and Equipment Maintenance','Air Conditioning Centers','Laundry and Dry Cleaning','Water Filters Companies','Equipment Rental Management','Furniture Workshop','Cleaning Agencies','Landscaping','Manufactures Management'] },
        medical:       { name: 'Medical',                    subs: ['Medical Centers / Clinics','Pharmacy','Medicine Company','Dental Clinic','Pediatric Clinic','Obstetrics & Gynecology Clinics','Medical Analysis Laboratories'] },
        logistics:     { name: 'Logistics',                  subs: ['Trading and Supply Chains','Import and Export Agencies'] },
        tourism:       { name: 'Tourism & Hospitality',      subs: ['Tourism Companies','Hotels Management','Transportation and Trips'] },
        bodycare:      { name: 'Bodycare & Fitness',         subs: ['Beauty Salons','Gym'] },
        learning:      { name: 'Learning',                   subs: ['Education Centers','Incubation Centers'] },
        automotive:    { name: 'Automotive',                 subs: ['Car Maintenance','Car Gallery','Automotive OEM Parts','Car Rental Management'] },
        transportation:{ name: 'Transportation',             subs: ['Transportation and Trips'] },
        realestate:    { name: 'Real Estate & Construction', subs: ['Construction and contracting','Real Estate Investment'] }
    };

    var ALL = [];
    Object.keys(INDUSTRIES).forEach(function(k){ INDUSTRIES[k].subs.forEach(function(s){ if(ALL.indexOf(s)===-1) ALL.push(s); }); });

    var selectedCat = null;
    var selectedSub = null;
    var VIEW = 'cats';

    function getSub() { var p = new URLSearchParams(window.location.search); return p.get('subdomain')||'yourcompany'; }

    function iconSVG(name) {
        var d = ICONS[name] || '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>';
        return '<svg viewBox="0 0 24 24" fill="none" stroke="#1B4FD8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="26" height="26">' + d + '</svg>';
    }

    function setTopbar(view, catName) {
        var left = document.getElementById('si-topbar-left');
        var right = document.getElementById('si-topbar-right');
        var sub = getSub();
        if (!left || !right) return;

        if (view === 'cats' || view === 'all') {
            left.innerHTML = '<div class="si-search-wrap"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input class="si-search-input" id="si-search" placeholder="Search for your industry" autocomplete="off"/></div>';
            var s = document.getElementById('si-search');
            if (s) s.addEventListener('input', function() { onSearch(this.value, sub); });
        } else if (view === 'subs') {
            left.innerHTML = '<h1 class="si-page-title">' + (catName||'') + '</h1>';
        } else if (view === 'confirm') {
            left.innerHTML = '<h1 class="si-page-title">System Industry</h1>';
        }

        if (view === 'cats') {
            right.innerHTML = '<p class="si-desc">Based on the selected industry, we will customize the system\'s experience to match your business needs. Or,</p><a href="/" class="si-skip">Skip and configure the system manually &#x2192;</a>';
        } else {
            var backHref = (view === 'subs') ? '/onboarding/industry?subdomain='+sub : 'javascript:void(0)';
            var backClick = (view === 'all' || view === 'confirm') ? ' id="si-back-btn"' : '';
            right.innerHTML = '<div class="si-topbar-actions">' +
                '<a href="'+(view==='subs'?'/onboarding/industry?subdomain='+sub:'javascript:void(0)')+'" class="si-back-link"'+(view!=='subs'?' id="si-back-btn"':'')+'>&#x2039; Back</a>' +
                '<a href="javascript:void(0)" class="si-view-all-link" id="si-vsectors-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> View Sectors</a>' +
                '<a href="/" class="si-skip-link">Skip &amp; Configure Manually &#x2192;</a>' +
                '</div>';

            var backBtn = document.getElementById('si-back-btn');
            if (backBtn) backBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (view === 'all') { showCats(); }
                else if (view === 'confirm') { showSubcats(selectedCat, sub); }
            });

            var vsBtn = document.getElementById('si-vsectors-btn');
            if (vsBtn) vsBtn.addEventListener('click', function(e) { e.preventDefault(); showCats(); });
        }
    }

    function showCats() {
        VIEW = 'cats';
        document.getElementById('si-categories').style.display = 'grid';
        document.getElementById('si-subcats').style.display = 'none';
        document.getElementById('si-confirm').style.display = 'none';
        setTopbar('cats');
        bindCats();
    }

    function showSubcats(cat, sub) {
        VIEW = 'subs';
        selectedCat = cat;
        var data = INDUSTRIES[cat];
        if (!data) return;
        document.getElementById('si-categories').style.display = 'none';
        document.getElementById('si-confirm').style.display = 'none';
        var el = document.getElementById('si-subcats');
        el.style.display = 'grid';
        el.innerHTML = renderSubList(data.subs);
        bindSubItems(sub);
        setTopbar('subs', data.name);
    }

    function showAll(sub) {
        VIEW = 'all';
        document.getElementById('si-categories').style.display = 'none';
        document.getElementById('si-confirm').style.display = 'none';
        var el = document.getElementById('si-subcats');
        el.style.display = 'grid';
        el.innerHTML = renderSubList(ALL);
        bindSubItems(sub);
        setTopbar('all');
    }

    function showConfirm(name, sub) {
        VIEW = 'confirm';
        document.getElementById('si-categories').style.display = 'none';
        document.getElementById('si-subcats').style.display = 'none';
        var el = document.getElementById('si-confirm');
        el.style.display = 'block';
        el.innerHTML = '<div class="si-confirm-wrap">' +
            '<p class="si-confirm-title">You selected <span>' + name + '</span>, do you want to proceed?</p>' +
            '<p class="si-confirm-note">Please note that this choice is permanent and can not be changed later for this account, however you can still manage your active plugins and modules.</p>' +
            '<div class="si-confirm-icon">' + iconSVG(name) + '</div>' +
            '<button class="si-confirm-yes" id="si-proceed">Yes, Proceed</button>' +
            '<button class="si-confirm-no" id="si-change">No, Change Industry</button>' +
            '</div>';
        setTopbar('confirm');
        document.getElementById('si-proceed').addEventListener('click', function() { window.location.href = '/'; });
        document.getElementById('si-change').addEventListener('click', function() { if (selectedCat) showSubcats(selectedCat, sub); else showAll(sub); });
    }

    function renderSubList(list) {
        return list.map(function(name) {
            return '<div class="si-sub-item" data-sub="'+name.replace(/"/g,'&quot;')+'">' +
                '<div class="si-sub-icon">'+iconSVG(name)+'</div>' +
                '<span class="si-sub-name">'+name+'</span>' +
                '</div>';
        }).join('');
    }

    function bindSubItems(sub) {
        document.querySelectorAll('#si-subcats .si-sub-item').forEach(function(item) {
            item.addEventListener('click', function() {
                selectedSub = this.getAttribute('data-sub');
                showConfirm(selectedSub, sub);
            });
        });
    }

    function bindCats() {
        var sub = getSub();
        document.querySelectorAll('.si-cat-item').forEach(function(item) {
            item.addEventListener('click', function() {
                var cat = this.getAttribute('data-cat');
                if (cat === 'all') { showAll(sub); } else { showSubcats(cat, sub); }
            });
        });
    }

    function onSearch(q, sub) {
        var el = document.getElementById('si-subcats');
        var cats = document.getElementById('si-categories');
        var confirm = document.getElementById('si-confirm');
        if (!q.trim()) {
            if (VIEW === 'all') { el.innerHTML = renderSubList(ALL); bindSubItems(sub); }
            else { el.style.display = 'none'; cats.style.display = 'grid'; if(confirm) confirm.style.display='none'; VIEW='cats'; }
            return;
        }
        var filtered = ALL.filter(function(n){ return n.toLowerCase().indexOf(q.toLowerCase())!==-1; });
        cats.style.display = 'none'; if(confirm) confirm.style.display='none';
        el.style.display = 'grid';
        el.innerHTML = renderSubList(filtered);
        bindSubItems(sub);
    }

    function siInit() {
        if (!document.getElementById('si-wrap')) return;
        bindCats();
        var s = document.getElementById('si-search');
        if (s) s.addEventListener('input', function() { onSearch(this.value, getSub()); });
    }

    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', siInit); } else { siInit(); }
    document.addEventListener('page:update', siInit);
}());
