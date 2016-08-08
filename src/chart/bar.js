import {scales, chart, quan, qual} from 'aurelia-charts';
import {Chart} from './base';

/* namespaced to enable the use of multiple graph libs */
@scales([quan, quan], [qual, quan])
@chart('C3', 'bar')
export class BarChart extends Chart {

  settings = {
    data: {
      type:    'bar',
      columns: []
    },
    bar:  {
      width: {
        ratio: 0.8
      }
    }
  };

  /* one dimensional plot */
  calculateSettings() {
    const columns = this.data.map(dataset => {
      const label = this.dimensions[1].label(dataset);

      return [label].concat(this.dimensions[1].data(dataset.values));
    });

    this.instance.axis.labels({
      x: this.dimensions[0].label(),
      y: this.dimensions[1].label()
    });

    this.settings = {columns};

    return this.settings;
  }

}
