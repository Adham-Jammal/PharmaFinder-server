'use strict';

/**
 * day-off service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::day-off.day-off');
