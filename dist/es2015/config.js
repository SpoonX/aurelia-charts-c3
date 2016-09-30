
export let Config = class Config {
  constructor() {
    this.settings = {};
  }

  configure(incomming = {}) {
    Object.assign(this.settings, incomming);

    return this;
  }

};