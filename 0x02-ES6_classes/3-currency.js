/* eslint-disable no-underscore-dangle */
export default class Currency {
  constructor(code, name) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(n) {
    this._name = n;
  }

  set code(c) {
    this._code = c;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
