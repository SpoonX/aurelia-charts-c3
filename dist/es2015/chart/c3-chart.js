var _dec, _class;

import { logger, chart, Chart } from 'aurelia-charts';
import c3 from 'c3';

export let C3Chart = (_dec = chart('C3'), _dec(_class = class C3Chart extends Chart {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.settings = {
      data: {
        columns: []
      }
    }, _temp;
  }

  create() {
    this.settings.bindto = this.element;
    this.instance = c3.generate(this.settings);
    if (this.data && this.dimensions) {
      this.update();
    }
  }

  calculateSettings() {
    logger.error(`'calculateSettings' method is not defined for ${ this.constructor.name }`);
  }

  update() {
    this.calculateSettings();
    this.instance.unload({
      done: () => {
        this.instance.load(this.settings);
      }
    });
  }

  destroy() {
    this.instance.destroy();
  }

  typeChanged(type) {
    this.instance.transform(type);
  }

}) || _class);