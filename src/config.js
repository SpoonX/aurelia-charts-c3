// import {configFor} from 'aurelia-config';

/**
 * @class
 * @configFor('spoonx/charts-c3')
 */
export class Config {

  /**
   * used to extend the chart settings with
   */
  settings = {};

  /**
   * @param {object} incomming - the object to extend settings with
   *
   * @chainable
   */
  configure(incomming = {}) {
    Object.assign(this.settings, incomming);

    return this;
  }

}
