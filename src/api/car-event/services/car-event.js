'use strict';

/**
 * car-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::car-event.car-event');
