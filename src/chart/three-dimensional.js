import {C3Chart} from './c3-chart';
import {TwoDimensional} from './two-dimensional';

/**
 * @class OneDimensional
 *
 * All one dimensional charts share the same logic.
 */
export class ThreeDimensional extends C3Chart {

  calculateSettings() {
    /* only for two dimensional plots */

    this.dimensions.third = {};

    this.settings = TwoDimensional.prototype.calculateSettings.call(this);

    this.data.forEach((dataset, index) => {
      const name = this.dimensions.name ? this.dimensions.name(dataset, index, this.data) : index;

      this.dimensions.third[name] = dataset.map(this.dimensions[2].value);
    });

    return this.settings;
  }
}
