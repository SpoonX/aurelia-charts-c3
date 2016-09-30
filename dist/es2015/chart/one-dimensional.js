import { C3Chart } from './c3-chart';

export let OneDimensional = class OneDimensional extends C3Chart {

  calculateSettings() {
    const columns = this.data.map(dataset => {
      const label = dataset.key;

      return [label].concat(this.dimensions[0].data(dataset.values));
    });

    this.instance.axis.labels({ x: this.dimensions[0].label() });

    this.settings = { columns };

    return this.settings;
  }

};