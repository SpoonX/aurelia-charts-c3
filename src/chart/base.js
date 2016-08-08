import {chart, Chart as BaseChart} from 'aurelia-charts';
import c3 from 'c3';

/* graph adapter for a graph lib. In this case for C3 */
@chart('C3') /* the generic version of a graph */
export class Chart extends BaseChart {

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
    /* only for two dimensional plots */
    let columns = [];
    let xs      = {};

    this.data.forEach(dataset => {
      const label  = this.dimensions[1].label(dataset);
      const xLabel = this.dimensions[0].label(dataset);
      xs[label]    = xLabel;
      columns      = columns.concat([
        [label].concat(this.dimensions[1].data(dataset.values)),
        [xLabel].concat(this.dimensions[0].data(dataset.values))
      ]);
    });

    this.instance.axis.labels({
      x: this.dimensions[0].label(),
      y: this.dimensions[1].label()
    });

    this.settings = {columns, xs};

    return this.settings;
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
