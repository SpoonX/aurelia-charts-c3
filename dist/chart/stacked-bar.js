import {scales, chart, quan} from 'aurelia-charts';
import {OneDimensional}      from './one-dimensional';

/* namespaced to enable the use of multiple graph libs */
@scales([quan]) /* warn when two similar scales are defined */
@chart('C3', 'stackedBar')
export class StackedBarChart extends OneDimensional {

  settings = {
    data: {
      type   : 'bar',
      columns: []
    },
    bar: {
      width: {
        ratio: 0.8
      }
    }
  };

  constructor() {
    super();

    const oldCalculateSettings = this.calculateSettings;

    this.calculateSettings = () => {
      this.settings = oldCalculateSettings.call(this);

      this.instance.groups([
        this.settings.columns.map(column => column[0])
      ]);

      return this.settings;
    };
  }
}
