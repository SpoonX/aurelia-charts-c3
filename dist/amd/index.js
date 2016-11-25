define(['exports', './aurelia-charts-c3'], function (exports, _aureliaChartsC) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaChartsC).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaChartsC[key];
      }
    });
  });
});