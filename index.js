'use strict';

var NewrelicTansport = require('newrelic-winston');
var winston = require('winston');
var Graylog2Transport = require('winston-graylog2');
var _ = require('lodash');

var transports = [];
var logger = {};

function init(options) {
  transports = [
    new (winston.transports.Console)({ timestamp: true, level: options.level}),
    new (NewrelicTansport)({ timestamp: true, env: options.env})
  ];

  if (options.graylog) {
    transports.push(new (Graylog2Transport)({ timestamp: true, level: options.level, graylog: options.graylog}));
  }

  logger = new (winston.Logger)({
    exitOnError: false,
    transports: transports
  });

  return logger;
}

module.exports = function(options) {
  options = options || {};
  options.level = options.level || 'info';

  return (_.isEmpty(logger)) ? init(options) : logger;
};
