import {scales, chart, quan, qual} from 'aurelia-charts';
import {Chart} from './base';

@scales([quan, qual], [qual, quan], [quan, quan])
@chart('C3', 'pie')
export class PieChart extends Chart {
  settings = {
    data: {
      type: 'pie',
      columns: []
    }
  }
}
