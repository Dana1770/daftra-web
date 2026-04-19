# -*- coding: utf-8 -*-
from odoo import http
from odoo.http import request
from odoo.addons.website.controllers.main import Website


class PricingHomepage(Website):
    @http.route('/contact', type='http', auth='public', website=True)
    def contact_page(self, **kw):
        return request.render('website_pricing_plans.contact_page', {})

    @http.route('/home', type='http', auth='public', website=True)
    def home_page(self, **kw):
        return request.render('website_pricing_plans.home_page', {})

    @http.route('/', type='http', auth='public', website=True, sitemap=True)
    def index(self, **kw):
        return self._render_pricing(**kw)

    @http.route(['/plans', '/pricing'], type='http', auth='public', website=True, sitemap=True)
    def plans(self, **kw):
        return self._render_pricing(**kw)

    @http.route(['/register', '/signup'], type='http', auth='public', website=True, sitemap=True)
    def register(self, **kw):
        return request.render('website_pricing_plans.register_page', {
            'hide_odoo_chrome': True,
        })

    @http.route(['/users/login'], type='http', auth='public', website=True, sitemap=False)
    def login(self, **kw):
        return request.render('website_pricing_plans.login_page', {
            'hide_odoo_chrome': True,
        })

    @http.route(['/welcome'], type='http', auth='public', website=True, sitemap=False)
    def welcome(self, subdomain='yourcompany', **kw):
        return request.render('website_pricing_plans.welcome_page', {
            'hide_odoo_chrome': True,
            'subdomain': subdomain or 'yourcompany',
        })

    @http.route(['/onboarding/business'], type='http', auth='public', website=True, sitemap=False)
    def onboarding_business(self, subdomain='yourcompany', **kw):
        return request.render('website_pricing_plans.business_info_page', {
            'hide_odoo_chrome': True,
            'subdomain': subdomain or 'yourcompany',
        })

    @http.route(['/onboarding/industry'], type='http', auth='public', website=True, sitemap=False)
    def onboarding_industry(self, subdomain='yourcompany', **kw):
        return request.render('website_pricing_plans.select_industry_page', {
            'hide_odoo_chrome': True,
            'subdomain': subdomain or 'yourcompany',
        })

    @http.route(['/onboarding/industry/all'], type='http', auth='public', website=True, sitemap=False)
    def onboarding_industry_all(self, subdomain='yourcompany', **kw):
        return request.render('website_pricing_plans.all_industries_page', {
            'hide_odoo_chrome': True,
            'subdomain': subdomain or 'yourcompany',
        })


    @http.route(['/perfume-stores', '/برنامج-إدارة-محلات-العطور'], type='http', auth='public', website=True, sitemap=True)
    def perfume_stores(self, **kw):
        return request.render('website_pricing_plans.perfume_stores_page', {
            'hide_odoo_chrome': True,
        })

    @http.route(['/clothing-stores', '/برنامج-إدارة-محلات-الملابس'], type='http', auth='public', website=True, sitemap=True)
    def clothing_stores(self, **kw):
        return request.render('website_pricing_plans.clothing_stores_page', {
            'hide_odoo_chrome': True,
        })

    @http.route(['/retail-stores', '/برنامج-إدارة-المحلات-التجارية'], type='http', auth='public', website=True, sitemap=True)
    def retail_stores(self, **kw):
        return request.render('website_pricing_plans.retail_stores_page', {
            'hide_odoo_chrome': True,
        })

    @http.route(['/invoicing'], type='http', auth='public', website=True, sitemap=True)
    def invoicing(self, **kw):
        return request.render('website_pricing_plans.invoicing_page', {
            'hide_odoo_chrome': True,
        })
    def _render_pricing(self, **kw):
        plans = request.env['website.pricing.plan'].sudo().search(
            [('active', '=', True)], order='sequence, id')
        sections = request.env['website.pricing.feature.section'].sudo().search(
            [], order='sequence, id')
        feature_matrix = []
        for section in sections:
            rows = []
            for feature in section.feature_ids.sorted('sequence'):
                row = {'feature': feature, 'values': []}
                for plan in plans:
                    line = request.env['website.pricing.plan.line'].sudo().search([
                        ('plan_id', '=', plan.id),
                        ('feature_id', '=', feature.id),
                    ], limit=1)
                    row['values'].append(line)
                rows.append(row)
            if rows:
                feature_matrix.append({'section': section, 'rows': rows})
        lang = request.env.lang or 'en_US'
        is_arabic = lang.startswith('ar')
        return request.render('website_pricing_plans.pricing_page', {
            'plans': plans,
            'feature_matrix': feature_matrix,
            'is_arabic': is_arabic,
            'hide_odoo_chrome': True,
        })
