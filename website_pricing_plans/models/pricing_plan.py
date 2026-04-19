# -*- coding: utf-8 -*-
from odoo import models, fields


class PricingPlan(models.Model):
    _name = 'website.pricing.plan'
    _description = 'Website Pricing Plan'
    _order = 'sequence, id'

    name = fields.Char(required=True, translate=True)
    tagline = fields.Char(translate=True)
    sequence = fields.Integer(default=10)
    active = fields.Boolean(default=True)
    is_featured = fields.Boolean(default=False)
    featured_label = fields.Char(translate=True, default='Most Popular')
    monthly_price = fields.Float()
    annual_price_per_month = fields.Float()
    annual_total = fields.Float()
    currency_symbol = fields.Char(default='$')
    cta_label = fields.Char(translate=True, default='Start Free Trial')
    cta_url = fields.Char(default='/register')
    color_class = fields.Selection([
        ('plan-basic', 'Basic'),
        ('plan-advanced', 'Advanced'),
        ('plan-complete', 'Complete'),
    ], default='plan-basic')
    feature_line_ids = fields.One2many('website.pricing.plan.line', 'plan_id')


class PricingPlanLine(models.Model):
    _name = 'website.pricing.plan.line'
    _description = 'Pricing Plan Feature Line'

    plan_id = fields.Many2one('website.pricing.plan', ondelete='cascade')
    feature_id = fields.Many2one('website.pricing.feature', required=True)
    value_type = fields.Selection([
        ('check', 'Included'),
        ('x', 'Not Included'),
        ('text', 'Custom Text'),
        ('unlimited', 'Unlimited'),
    ], default='check')
    value_text = fields.Char(translate=True)
