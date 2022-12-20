'use strict';

/**
 * road-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::road-test.road-test');
