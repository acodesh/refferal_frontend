import HttpHelper from './http-helper';

class Utils {
  constructor() {
    this.httpHelper = new HttpHelper();
    }

    getAll() {
        return {
          httpHelper: this.httpHelper,
        };
    }
    
    getLocalStorageData = (key) => {
      const data = localStorage.getItem(key);
    
      return JSON.parse(data);
    };
    
    setLocalStorageData = (key, data) => {
      localStorage.setItem(key, data);
    
      return true;
    };
}

export default Utils;