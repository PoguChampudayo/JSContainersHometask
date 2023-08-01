export default class ErrorRepository {
  constructor() {
    this.errors = new Map();
  }

  add(errorCode, description) {
    this.errors.set(errorCode, description);
  }

  translate(errorCode) {
    const result = this.errors.get(errorCode);
    if (result) {
      return result;
    }

    return 'Unknown error';
  }
}
