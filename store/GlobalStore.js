// import {makeAutoObservable} from 'mobx'
import { makeAutoObservable } from "mobx"

export default class GlobalStore {
  constructor() {
    //_-означає що ця змінна є константою
    this._isAuth = false
    // this._isAuth = true
    this._user = {}
    this._isLith = false
    // this._isLith = true
    makeAutoObservable(this) //слідкує за зміною цих змінних
  }
  //Ekshines
  setIsAuth(bool) {
    this._isAuth = bool
  }
  setUser(user) {
    this._user = user
  }
  setIsLith(bool) {
    this._isLith = bool
    console.log("GlobalStore.js/t_isLith=", this._isLith)
  }
  //Geters- для отримання перемінних із State(До них звертаємося як до звичайних обєктів)
  //Це компютінг ф-ції, які викликаються тільки у випадку зміни змінних які є всередині цього обєкту
  get isAuth() {
    return this._isAuth
  }
  get user() {
    return this._user
  }
  get isLith() {
    return this._isLith
  }
}
