// import {makeAutoObservable} from 'mobx'
import { makeAutoObservable } from "mobx"

export default class DeviceStore {
  constructor() {
    //_-означає що ця змінна є константою
    this._types = [
      { id: 1, name: "Холодильник" },
      { id: 2, name: "Смартфони" },
    ]

    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
    ]

    this._devices = [
      {
        id: 1,
        name: "Iphone 12 pro",
        price: 12000,
        rating: 5,
        img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400*300.png",
      },
      {
        id: 2,
        name: "Iphone 12 pro",
        price: 12000,
        rating: 5,
        img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400*300.png",
      },
    ]
    makeAutoObservable(this) //слідкує за зміною цих змінних
  }
  //Ekshines
  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }

  //Geters- для отримання перемінних із State(До них звертаємося як до звичайних обєктів)
  //Це компютінг ф-ції, які викликаються тільки у випадку зміни змінних які є всередині цього обєкту
  get types() {
    return this._types
  }
  get brands() {
    return this._brands
  }
  get devices() {
    return this._devices
  }
}
