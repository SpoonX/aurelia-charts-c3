import {C3Chart} from './c3-chart';

/**
 * @class OneDimensional
 *
 * All one dimensional charts share the same logic.
 */
export class OneDimensional extends C3Chart {

  calculateSettings() {
    let columns = this.data.map((dataset, index, data) => {
      const name = this.dimensions.name ? this.dimensions.name(dataset, index, data) : index;

      return [name].concat(dataset.map(this.dimensions[0].value));
    });

    this.settings = {columns};

    return this.settings;
  }
}
