'use strict';

exports.__esModule = true;

var _aureliaChartsC = require('./aurelia-charts-c3');

Object.keys(_aureliaChartsC).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _aureliaChartsC[key];
    }
  });
});