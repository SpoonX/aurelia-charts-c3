import {C3Chart} from './c3-chart';

/**
 * @class OneDimensional
 *
 * All one dimensional charts share the same logic.
 */
export class OneDimensional extends C3Chart {

  calculateSettings() {
    let columns = this.data.map(dataset => {
      let label = dataset.key;

      return [label].concat(dataset.map(this.dimensions[0].value));
    });

    this.instance.axis.labels({x: this.dimensions[0].label()});

    this.settings = {columns};

    return this.settings;
  }
}
