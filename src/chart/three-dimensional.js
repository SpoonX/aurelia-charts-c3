import {C3Chart} from './c3-chart';

/**
 * @class OneDimensional
 *
 * All one dimensional charts share the same logic.
 */
export class ThreeDimensional extends C3Chart {

  calculateSettings() {
    /* only for two dimensional plots */
    let columns = [];
    let xs      = {};

    this.dimensions.third = {};

    this.data.forEach(dataset => {
      const label  = this.dimensions[1].label(dataset);
      const xLabel = this.dimensions[0].label(dataset);
      xs[label]    = xLabel;
      columns      = columns.concat([
        [label ].concat(dataset.map(this.dimensions[1].value)),
        [xLabel].concat(dataset.map(this.dimensions[0].value))
      ]);

      this.dimensions.third[label] = dataset.map(this.dimensions[2].value);
    });

    this.instance.axis.labels({
      x: this.dimensions[0].label(),
      y: this.dimensions[1].label()
    });

    this.settings = {columns, xs};

    return this.settings;
  }


}
