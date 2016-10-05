import { C3Chart } from './c3-chart';

export let TwoDimensional = class TwoDimensional extends C3Chart {

  calculateSettings() {
    let columns = [];
    let xs = {};

    this.data.forEach((dataset, index) => {
      const name = this.dimensions.name ? this.dimensions.name(dataset, index, this.data) : index;
      const yKey = name;
      const xKey = 'x' + yKey;

      xs[yKey] = xKey;
      columns = columns.concat([[yKey].concat(dataset.map(this.dimensions[1].value)), [xKey].concat(dataset.map(this.dimensions[0].value))]);
    });

    this.settings = { columns, xs };

    return this.settings;
  }
};