import {logger, chart, Chart} from 'aurelia-charts';
import c3 from 'c3';

/* @todo: consider naming the Chart class of aurelia-charts an AureliaChart */

/* graph adapter for a graph lib. In this case for C3 */
/* the generic version of a graph does not have a type defined*/
@chart('C3')
export class C3Chart extends Chart {

  settings = {
    data: {
      columns: []
    }
  };

  create() {
    this.settings.bindto = this.element;
    this.instance        = c3.generate(this.settings);
    if (this.data && this.dimensions) {
      this.update();
    }
  }

  calculateSettings() {
    logger.error(`'calculateSettings' method is not defined for ${this.constructor.nam}`);
  }

  update() {
    this.calculateSettings();
    this.instance.load(this.settings);
  }

  destroy() {
    this.instance.destroy();
  }

  typeChanged(type) {
    this.instance.transform(type);
  }

}
