import {C3Chart} from './c3-chart';

/**
 * @class OneDimensional
 *
 * All one dimensional charts share the same logic.
 */
export class TwoDimensional extends C3Chart {

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


}
