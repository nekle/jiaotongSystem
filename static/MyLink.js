export class MyLink {
  get id () {
    return this._id;
  }

  set id (value) {
    this._id = value;
  }

  get cross1 () {
    return this._cross1;
  }

  set cross1 (value) {
    this._cross1 = value;
  }

  get cross2 () {
    return this._cross2;
  }

  set cross2 (value) {
    this._cross2 = value;
  }

  get a () {
    return this._a;
  }

  set a (value) {
    this._a = value;
  }

  get b () {
    return this._b;
  }

  set b (value) {
    this._b = value;
  }
  constructor (id,cross1,cross2,a,b) {

    this._id = id;
    this._cross1 = cross1;
    this._cross2 = cross2;
    this._a = a;
    this._b = b;
  }

}