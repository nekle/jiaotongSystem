export class MyMarker {
  get id () {
    return this._id;
  }

  set id (value) {
    this._id = value;
  }

  get name () {
    return this._name;
  }

  set name (value) {
    this._name = value;
  }

  get latitude () {
    return this._latitude;
  }

  set latitude (value) {
    this._latitude = value;
  }

  get longtitude () {
    return this._longtitude;
  }

  set longtitude (value) {
    this._longtitude = value;
  }

  get type () {
    return this._type;
  }

  set type (value) {
    this._type = value;
  }

  get car_sum () {
    return this._car_sum;
  }

  set car_sum (value) {
    this._car_sum = value;
  }

  get car_start_time () {
    return this._car_start_time;
  }

  set car_start_time (value) {
    this._car_start_time = value;
  }

  get car_start_interval () {
    return this._car_start_interval;
  }

  set car_start_interval (value) {
    this._car_start_interval = value;
  }

  get passenger_sum () {
    return this._passenger_sum;
  }

  set passenger_sum (value) {
    this._passenger_sum = value;
  }

  get car_passenger_sum () {
    return this._car_passenger_sum;
  }

  set car_passenger_sum (value) {
    this._car_passenger_sum = value;
  }

  get truck_sum () {
    return this._truck_sum;
  }

  set truck_sum (value) {
    this._truck_sum = value;
  }

  get motor_sum () {
    return this._motor_sum;
  }

  set motor_sum (value) {
    this._motor_sum = value;
  }

  get capacity () {
    return this._capacity;
  }

  set capacity (value) {
    this._capacity = value;
  }
  constructor (id,name,latitude,longtitude,type,car_sum,car_start_time,car_start_interval,passenger_sum,car_passenger_sum,truck_sum,motor_sum,capacity) {
    this._id = id;
    this._name = name;
    this._latitude = latitude;
    this._longtitude = longtitude;
    this._type = type;
    this._car_sum = car_sum;
    this._car_start_time = car_start_time;
    this._car_start_interval = car_start_interval;
    this._passenger_sum = passenger_sum;
    this._car_passenger_sum = car_passenger_sum;
    this._truck_sum = truck_sum;
    this._motor_sum = motor_sum;
    this._capacity = capacity;
  }
}