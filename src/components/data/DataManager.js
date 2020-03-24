class DataManager {
  constructor() {
    this.baseData = {};
    this.transformations = {};
    this.listeners = {};
  }

  callListeners(name) {
    (this.listeners[name] || []).forEach(listener => listener(this.baseData[name]));
  }

  registerListener(name, callback) {
    if (!this.listeners[name]) {
      this.listeners[name] = [callback]
    } else {
      this.listeners[name] = this.listeners[name].concat(callback);
    }

    if (this.baseData[name]) {
      callback(this.baseData[name]);
    }
  }

  resisterData(name, data) {
    this.baseData[name] = data;
    this.callListeners(name);
  }

  registerDataFromTransformation(name, baseData, transformation) {
    baseData = typeof baseData === 'string' ? this.baseData[baseData] : baseData;
    transformation = typeof transformation === 'string' ? this.transformations[transformation] : transformation;

    this.baseData[name] = transformation(baseData);
    this.callListeners(name);
  }

  getData(name) {
    return this.baseData[name];
  }

  removeData(name) {
    delete this.baseData[name];
  }

  registerTransformation(name, transformation) {
    this.transformations[name] = transformation;
  }
}

export const dataManager = new DataManager();