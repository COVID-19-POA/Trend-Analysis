class LanguageController {
  constructor() {
    this.callbacks = [];
  }

  addCallback(callback) {
    this.callbacks.push(callback);
  }

  onLanguageChange = (lng) => {
    this.callbacks.forEach(callback => callback(lng));
  }
}

export const languageController = new LanguageController();