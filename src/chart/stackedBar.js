import {scales, chart, quan, qual} from 'aurelia-charts';
import {BarChart} from './bar';

/* namespaced to enable the use of multiple graph libs */
@scales([quan, quan], [qual, quan])
@chart('C3', 'stackedBar')
export class StackedBarChart extends BarChart {

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

  update() {
    this.calculateSettings();
    this.instance.groups([
      this.settings.columns.map(column => column[0])
    ]);
    this.instance.load(this.settings);
  }
}
