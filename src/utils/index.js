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
}

export default Utils;