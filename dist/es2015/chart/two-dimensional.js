import { C3Chart } from './c3-chart';

export let TwoDimensional = class TwoDimensional extends C3Chart {

  calculateSettings() {
    let columns = [];
    let xs = {};

    this.data.forEach(dataset => {
      const label = this.dimensions[1].label(dataset);
      const xLabel = this.dimensions[0].label(dataset);
      xs[label] = xLabel;
      columns = columns.concat([[label].concat(this.dimensions[1].data(dataset.values)), [xLabel].concat(this.dimensions[0].data(dataset.values))]);
    });

    this.instance.axis.labels({
      x: this.dimensions[0].label(),
      y: this.dimensions[1].label()
    });

    this.settings = { columns, xs };

    return this.settings;
  }

};