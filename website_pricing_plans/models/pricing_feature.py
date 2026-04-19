# -*- coding: utf-8 -*-
from odoo import models, fields


class PricingFeatureSection(models.Model):
    _name = 'website.pricing.feature.section'
    _description = 'Pricing Feature Section'
    _order = 'sequence, id'

    name = fields.Char(required=True, translate=True)
    sequence = fields.Integer(default=10)
    feature_ids = fields.One2many('website.pricing.feature', 'section_id')


class PricingFeature(models.Model):
    _name = 'website.pricing.feature'
    _description = 'Pricing Feature'
    _order = 'section_id, sequence, id'

    name = fields.Char(required=True, translate=True)
    description = fields.Text(translate=True)
    section_id = fields.Many2one('website.pricing.feature.section', ondelete='cascade')
    sequence = fields.Integer(default=10)
