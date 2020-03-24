// Class to manage all data from charts and how they interact between them

class DataManager {
  constructor() {
    this.baseData = {};
    this.listeners = {};
  }

  // Auxiliary function to call all callbacks registered on name
  callListeners(name) {
    (this.listeners[name] || []).forEach(listener => listener(this.baseData[name]));
  }

  // Register listener on name. When data on register on a name is changed or registered, all callbacks registered on that name will be called
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

  // Register data on a name
  resisterData(name, data) {
    this.baseData[name] = data;
    this.callListeners(name);
  }

  // Take a data, new or already registered, apply a function on it and save it on a new name
  registerDataFromTransformation(name, baseData, transformation) {
    baseData = typeof baseData === 'string' ? this.baseData[baseData] : baseData;

    this.baseData[name] = transformation(baseData);
    this.callListeners(name);
  }

  // Get registered data
  getData(name) {
    return this.baseData[name];
  }

  // Remove data registry
  removeData(name) {
    delete this.baseData[name];
  }
}

export const dataManager = new DataManager();