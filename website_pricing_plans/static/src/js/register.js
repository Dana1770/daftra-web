(function () {
    'use strict';

    var rgLang = 'en';

    var RG_COUNTRIES = [
        {f:'\uD83C\uDDF8\uD83C\uDDE6',n:'Saudi Arabia',c:'+966'},
        {f:'\uD83C\uDDEA\uD83C\uDDEC',n:'Egypt',c:'+20'},
        {f:'\uD83C\uDDE6\uD83C\uDDEA',n:'United Arab Emirates',c:'+971'},
        {f:'\uD83C\uDDEE\uD83C\uDDF6',n:'Iraq',c:'+964'},
        {f:'\uD83C\uDDEF\uD83C\uDDF4',n:'Jordan',c:'+962'},
        {f:'\uD83C\uDDF0\uD83C\uDDFC',n:'Kuwait',c:'+965'},
        {f:'\uD83C\uDDF6\uD83C\uDDE6',n:'Qatar',c:'+974'},
        {f:'\uD83C\uDDE7\uD83C\uDDED',n:'Bahrain',c:'+973'},
        {f:'\uD83C\uDDF4\uD83C\uDDF2',n:'Oman',c:'+968'},
        {f:'\uD83C\uDDFE\uD83C\uDDEA',n:'Yemen',c:'+967'},
        {f:'\uD83C\uDDF1\uD83C\uDDFE',n:'Libya',c:'+218'},
        {f:'\uD83C\uDDE9\uD83C\uDDFF',n:'Algeria',c:'+213'},
        {f:'\uD83C\uDDF2\uD83C\uDDE6',n:'Morocco',c:'+212'},
        {f:'\uD83C\uDDF9\uD83C\uDDF3',n:'Tunisia',c:'+216'},
        {f:'\uD83C\uDDF1\uD83C\uDDE7',n:'Lebanon',c:'+961'},
        {f:'\uD83C\uDDF8\uD83C\uDDE9',n:'Sudan',c:'+249'},
        {f:'\uD83C\uDDF8\uD83C\uDDFE',n:'Syria',c:'+963'},
        {f:'\uD83C\uDDF5\uD83C\uDDF8',n:'Palestine',c:'+970'},
        {f:'\uD83C\uDDFA\uD83C\uDDF8',n:'United States',c:'+1'},
        {f:'\uD83C\uDDEC\uD83C\uDDE7',n:'United Kingdom',c:'+44'},
        {f:'\uD83C\uDDE9\uD83C\uDDEA',n:'Germany',c:'+49'},
        {f:'\uD83C\uDDEB\uD83C\uDDF7',n:'France',c:'+33'},
        {f:'\uD83C\uDDF9\uD83C\uDDF7',n:'Turkey',c:'+90'},
        {f:'\uD83C\uDDF5\uD83C\uDDF0',n:'Pakistan',c:'+92'},
        {f:'\uD83C\uDDEE\uD83C\uDDF3',n:'India',c:'+91'},
        {f:'\uD83C\uDDE8\uD83C\uDDE6',n:'Canada',c:'+1'},
        {f:'\uD83C\uDDE6\uD83C\uDDFA',n:'Australia',c:'+61'},
        {f:'\uD83C\uDDF3\uD83C\uDDF1',n:'Netherlands',c:'+31'},
        {f:'\uD83C\uDDEE\uD83C\uDDF9',n:'Italy',c:'+39'},
        {f:'\uD83C\uDDEA\uD83C\uDDF8',n:'Spain',c:'+34'}
    ];

    var RG_T = {
        en:{
            title:'Create account',
            infoH:'Everything you need to manage your business in one platform!',
            infoP:'Supports over 50 different industries and more than 20 professional business management apps!',
            infoSub:'All these features are tailored to your specific industry!',
            namePh:'Business Name *',emailPh:'Email Address *',
            phonePh:'Mobile Number *',urlPh:'Login URL *',passPh:'Password *',
            btn:'Get Started for FREE',
            terms:'By signing up, you agree to daftra <a href="/terms-conditions">Terms &amp; Conditions</a> and <a href="/privacy-policy">Privacy Policy</a>',
            have:'Have an account?',signin:'Sign in',home:'Home',langBtn:'\u0639\u0631\u0628\u064A',
            feats:['Sales','Invoicing','Accounting','Inventory','CRM','HRM','Branches','Operations'],
            errName:'Please enter your Business Name',
            errEmail:'Please enter your email',
            errPhone:'Please enter your phone',
            errUrl:'Please enter your login page name',
            errPass:'Please enter password',
            creating:'Creating your account...'
        },
        ar:{
            title:'\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628',
            infoH:'\u0643\u0644 \u0645\u0627 \u062A\u062D\u062A\u0627\u062C\u0647 \u0644\u0625\u062F\u0627\u0631\u0629 \u0639\u0645\u0644\u0643 \u0641\u064A \u0645\u0646\u0635\u0629 \u0648\u0627\u062D\u062F\u0629!',
            infoP:'\u064A\u062F\u0639\u0645 \u0623\u0643\u062B\u0631 \u0645\u0646 50 \u0645\u062C\u0627\u0644\u0627\u064B \u0648\u0623\u0643\u062B\u0631 \u0645\u0646 20 \u062A\u0637\u0628\u064A\u0642\u0627\u064B \u0627\u062D\u062A\u0631\u0627\u0641\u064A\u0627\u064B!',
            infoSub:'\u062C\u0645\u064A\u0639 \u0647\u0630\u0647 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0645\u0635\u0645\u0645\u0629 \u062E\u0635\u064A\u0635\u0627\u064B \u0644\u0645\u062C\u0627\u0644\u0643!',
            namePh:'\u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629 *',emailPh:'\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A *',
            phonePh:'\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644 *',urlPh:'\u0631\u0627\u0628\u0637 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 *',passPh:'\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 *',
            btn:'\u0627\u0628\u062F\u0623 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0645\u062C\u0627\u0646\u0627\u064B',
            terms:'\u0628\u0627\u0644\u062A\u0633\u062C\u064A\u0644\u060C \u0623\u0646\u062A \u062A\u0648\u0627\u0641\u0642 \u0639\u0644\u0649 <a href="/terms-conditions">\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062D\u0643\u0627\u0645</a> \u0648<a href="/privacy-policy">\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629</a>',
            have:'\u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628\u061F',signin:'\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644',home:'\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629',langBtn:'English',
            feats:['\u0627\u0644\u0645\u0628\u064A\u0639\u0627\u062A','\u0627\u0644\u0641\u0648\u0627\u062A\u064A\u0631','\u0627\u0644\u0645\u062D\u0627\u0633\u0628\u0629','\u0627\u0644\u0645\u062E\u0632\u0648\u0646','\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0639\u0645\u0644\u0627\u0621','\u0627\u0644\u0645\u0648\u0627\u0631\u062F \u0627\u0644\u0628\u0634\u0631\u064A\u0629','\u0627\u0644\u0641\u0631\u0648\u0639','\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A'],
            errName:'\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u062F\u062E\u0627\u0644 \u0627\u0633\u0645 \u0627\u0644\u0634\u0631\u0643\u0629',
            errEmail:'\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u062F\u062E\u0627\u0644 \u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A',
            errPhone:'\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u062F\u062E\u0627\u0644 \u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644',
            errUrl:'\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u062F\u062E\u0627\u0644 \u0631\u0627\u0628\u0637 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644',
            errPass:'\u0627\u0644\u0631\u062C\u0627\u0621 \u0625\u062F\u062E\u0627\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631',
            creating:'\u062C\u0627\u0631\u064A \u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628\u0643...'
        }
    };

    function getGroup(inputId) {
        var el = document.getElementById(inputId);
        if (!el) return null;
        var g = el.closest('.rg-group');
        return g || el.parentElement;
    }

    function showError(inputId, msg) {
        var el = document.getElementById(inputId);
        if (el) el.style.borderColor = '#ef4444';
        var group = getGroup(inputId);
        if (!group) return;
        var existing = group.querySelector('.rg-err');
        if (existing) existing.remove();
        var err = document.createElement('div');
        err.className = 'rg-err';
        err.innerHTML = '<svg width="14" height="14" viewBox="0 0 20 20" fill="none" style="flex-shrink:0"><circle cx="10" cy="10" r="10" fill="#ef4444"/><text x="10" y="15" text-anchor="middle" fill="white" font-size="13" font-weight="bold" font-family="Arial">!</text></svg>' + msg;
        group.appendChild(err);
    }

    function clearError(inputId) {
        var el = document.getElementById(inputId);
        if (el) el.style.borderColor = '';
        var group = getGroup(inputId);
        if (!group) return;
        var existing = group.querySelector('.rg-err');
        if (existing) existing.remove();
    }

    function validateForm() {
        var t = RG_T[rgLang];
        var valid = true;
        var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        var fields = [
            {id:'rg-name', check:function(v){return v.trim().length > 0;}, err:'errName'},
            {id:'rg-email', check:function(v){return emailRe.test(v.trim());}, err:'errEmail'},
            {id:'rg-phone', check:function(v){return v.trim().length > 0;}, err:'errPhone'},
            {id:'rg-subdomain', check:function(v){return v.trim().length > 0;}, err:'errUrl'},
            {id:'rg-pass', check:function(v){return v.length >= 8;}, err:'errPass'}
        ];

        fields.forEach(function(f) {
            var el = document.getElementById(f.id);
            if (!el || !f.check(el.value)) {
                showError(f.id, t[f.err]);
                valid = false;
            } else {
                clearError(f.id);
            }
        });

        return valid;
    }

    function rgRenderList(list) {
        var el = document.getElementById('rg-clist');
        if (!el) return;
        el.innerHTML = '';
        list.forEach(function(c) {
            var div = document.createElement('div');
            div.className = 'rg-citem';
            div.innerHTML = '<span class="rg-cflag">' + c.f + '</span><span class="rg-citem-name">' + c.n + '</span><span class="rg-citem-code">' + c.c + '</span>';
            div.addEventListener('click', function() { rgSelect(c.f, c.c); });
            el.appendChild(div);
        });
    }

    function rgFilter(q) {
        rgRenderList(RG_COUNTRIES.filter(function(c) {
            return c.n.toLowerCase().indexOf(q.toLowerCase()) !== -1 || c.c.indexOf(q) !== -1;
        }));
    }

    function rgSelect(f, c) {
        var flagEl = document.getElementById('rg-sflag');
        var codeEl = document.getElementById('rg-scode');
        if (flagEl) flagEl.textContent = f;
        if (codeEl) codeEl.textContent = c;
        rgToggle(false);
    }

    function rgToggle(force) {
        var btn = document.getElementById('rg-cbtn');
        var dd = document.getElementById('rg-dd');
        if (!btn || !dd) return;
        var open = (force !== undefined) ? force : !dd.classList.contains('open');
        dd.classList.toggle('open', open);
        if (open) {
            var search = document.getElementById('rg-dsearch');
            if (search) search.value = '';
            rgRenderList(RG_COUNTRIES);
            setTimeout(function() { if (search) search.focus(); }, 50);
        }
    }

    function rgSetLang(lang) {
        rgLang = lang;
        var t = RG_T[lang];
        var isAr = lang === 'ar';
        document.documentElement.lang = lang;
        document.documentElement.dir = isAr ? 'rtl' : 'ltr';

        var ids = {'rg-title':'title','rg-info-h':'infoH','rg-info-p':'infoP','rg-info-sub':'infoSub','rg-btn':'btn','rg-have-foot':'have','rg-card-home':'home'};
        Object.keys(ids).forEach(function(id) { var el = document.getElementById(id); if (el) el.textContent = t[ids[id]]; });

        var phs = {'rg-name':'namePh','rg-email':'emailPh','rg-phone':'phonePh','rg-subdomain':'urlPh','rg-pass':'passPh'};
        Object.keys(phs).forEach(function(id) { var el = document.getElementById(id); if (el) el.placeholder = t[phs[id]]; });

        var terms = document.getElementById('rg-terms'); if (terms) terms.innerHTML = t.terms;
        var sf = document.getElementById('rg-signin-foot'); if (sf) sf.textContent = '\u00a0' + t.signin;

        var langBtn = document.getElementById('rg-lang-ar');
        if (langBtn) { langBtn.textContent = t.langBtn; langBtn.setAttribute('data-lang', isAr ? 'en' : 'ar'); }

        document.querySelectorAll('.rg-feat-lbl').forEach(function(el, i) { if (t.feats[i]) el.textContent = t.feats[i]; });

        var left = document.querySelector('.rg-left'); if (left) left.style.fontFamily = isAr ? "'Cairo',sans-serif" : "'Inter',sans-serif";
        var card = document.querySelector('.rg-card'); if (card) card.style.fontFamily = isAr ? "'Cairo',sans-serif" : "'Inter',sans-serif";
    }

    function rgInit() {
        if (!document.getElementById('rg-clist')) return;
        rgRenderList(RG_COUNTRIES);

        document.addEventListener('click', function(e) {
            var wrap = document.querySelector('.rg-country-wrap');
            if (wrap && !wrap.contains(e.target)) { var dd = document.getElementById('rg-dd'); if (dd) dd.classList.remove('open'); }
        });

        var dsearch = document.getElementById('rg-dsearch');
        if (dsearch) dsearch.addEventListener('input', function() { rgFilter(this.value); });

        var cbtn = document.getElementById('rg-cbtn');
        if (cbtn) cbtn.addEventListener('click', function(e) { e.stopPropagation(); rgToggle(); });

        var langBtn = document.getElementById('rg-lang-ar');
        if (langBtn) langBtn.addEventListener('click', function() { rgSetLang(this.getAttribute('data-lang')); });

        var eyeBtn = document.getElementById('rg-eye');
        var passEl = document.getElementById('rg-pass');
        if (eyeBtn && passEl) eyeBtn.addEventListener('click', function() { passEl.type = passEl.type === 'password' ? 'text' : 'password'; });

        ['rg-name','rg-email','rg-phone','rg-subdomain','rg-pass'].forEach(function(id) {
            var el = document.getElementById(id);
            if (el) el.addEventListener('input', function() { clearError(id); });
        });

        var subdomainEl = document.getElementById('rg-subdomain');
        if (subdomainEl) subdomainEl.addEventListener('input', function() { this.value = this.value.replace(/[^a-z0-9-]/g,'').toLowerCase(); });

        var submitBtn = document.getElementById('rg-btn');
        if (submitBtn) {
            submitBtn.addEventListener('click', function() {
                if (!validateForm()) return;
                var t = RG_T[rgLang];
                this.textContent = t.creating;
                this.style.opacity = '0.7';
                this.disabled = true;
                var self = this;
                setTimeout(function() { var sub = document.getElementById('rg-subdomain'); window.location.href = '/welcome?subdomain=' + (sub ? sub.value : 'yourcompany'); }, 1500);
            });
        }
    }

    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', rgInit); } else { rgInit(); }
    document.addEventListener('page:update', rgInit);
}());
