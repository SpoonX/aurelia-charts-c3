import c3 from 'c3';
import {scales,chart,quan,logger,Chart} from 'aurelia-charts';

export declare {
  C3Chart
} from 'aurelia-charts-c3/chart/c3-chart';

/////////////////////////
////// ONE DIMENSIONAL //
/////////////////////////
export declare {
  OneDimensional
} from 'aurelia-charts-c3/chart/one-dimensional';
export declare {
  PieChart
} from 'aurelia-charts-c3/chart/pie';
export declare {
  DonutChart
} from 'aurelia-charts-c3/chart/donut';
export declare {
  GaugeChart
} from 'aurelia-charts-c3/chart/gauge';
export declare {
  BarChart
} from 'aurelia-charts-c3/chart/bar';
export declare {
  StackedBarChart
} from 'aurelia-charts-c3/chart/stacked-bar';

/////////////////////////
////// TWO DIMENSIONAL //
/////////////////////////
export declare {
  TwoDimensional
} from 'aurelia-charts-c3/chart/two-dimensional';
export declare {
  AreaChart
} from 'aurelia-charts-c3/chart/area';
export declare {
  AreaSplineChart
} from 'aurelia-charts-c3/chart/area-spline';
export declare {
  AreaStepChart
} from 'aurelia-charts-c3/chart/area-step';
export declare {
  LineChart
} from 'aurelia-charts-c3/chart/line';
export declare {
  SplineChart
} from 'aurelia-charts-c3/chart/spline';
export declare {
  ScatterChart
} from 'aurelia-charts-c3/chart/scatter';
export declare {
  StepChart
} from 'aurelia-charts-c3/chart/step';

/////////////////////////
// THREE DIMENSIONAL   //
/////////////////////////
export declare {
  ThreeDimensional
} from 'aurelia-charts-c3/chart/three-dimensional';
export declare {
  BubbleChart
} from 'aurelia-charts-c3/chart/bubble';
export declare class AreaSplineChart extends TwoDimensional {
  settings: any;
}
export declare class AreaStepChart extends TwoDimensional {
  settings: any;
}
export declare class AreaChart extends TwoDimensional {
  settings: any;
}
/* namespaced to enable the use of multiple graph libs */
export declare class BarChart extends OneDimensional {
  settings: any;
}
/**
 * @class BubbleChart
 *
 * Basically a scatter chart but it has three dimensions. The third being the
 * radius of the scatter
 */
export declare class BubbleChart extends ThreeDimensional {
  settings: any;
}
/* @todo: consider naming the Chart class of aurelia-charts an AureliaChart */
/**
 * @class C3Chart is the base class for all c3 related graphs
 */
export declare class C3Chart extends Chart {
  settings: any;
  create(): any;
  calculateSettings(): any;
  update(newData?: any, oldData?: any): any;
  destroy(): any;
  typeChanged(type?: any): any;
  dimensionIds(data?: any): any;
}
export declare class DonutChart extends OneDimensional {
  settings: any;
}
export declare class GaugeChart extends OneDimensional {
  settings: any;
}
/* namespaced to enable the use of multiple graph libs */
export declare class LineChart extends TwoDimensional {
  settings: any;
}
/**
 * @class OneDimensional
 *
 * All one dimensional charts share the same logic.
 */
export declare class OneDimensional extends C3Chart {
  calculateSettings(): any;
}
export declare class PieChart extends OneDimensional {
  settings: any;
}
/* namespaced to enable the use of multiple graph libs */
export declare class ScatterChart extends TwoDimensional {
  settings: any;
}
/* namespaced to enable the use of multiple graph libs */
export declare class SplineChart extends TwoDimensional {
  settings: any;
}
/* namespaced to enable the use of multiple graph libs */
/* warn when two similar scales are defined */
export declare class StackedBarChart extends OneDimensional {
  settings: any;
  constructor();
}
export declare class StepChart extends TwoDimensional {
  settings: any;
}
/**
 * @class OneDimensional
 *
 * All one dimensional charts share the same logic.
 */
export declare class ThreeDimensional extends C3Chart {
  calculateSettings(): any;
}
/**
 * @class OneDimensional
 *
 * All one dimensional charts share the same logic.
 */
export declare class TwoDimensional extends C3Chart {
  calculateSettings(): any;
}