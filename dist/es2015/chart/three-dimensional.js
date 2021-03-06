import { TwoDimensional } from './two-dimensional';
import { C3Chart } from './c3-chart';

export let ThreeDimensional = class ThreeDimensional extends C3Chart {

  calculateSettings() {

    this.dimensions.third = {};

    this.settings = TwoDimensional.prototype.calculateSettings.call(this);

    this.data.forEach((dataset, index) => {
      const name = this.dimensions.name ? this.dimensions.name(dataset, index, this.data) : index;

      this.dimensions.third[name] = dataset.map(this.dimensions[2].value);
    });

    return this.settings;
  }
};