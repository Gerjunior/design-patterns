import * as colors from './colors.js'

export default class Database {
  static #instance

  static getInstance() {
    if (!this.#instance) {
      console.log(colors.white, '- Creating instance of Database\n')
      this.#instance = new Database() 
    }

    console.log(colors.white, '- Returning instance of Database\n')

    return this.#instance
  }

  get(id) {
    return {}
  }

  insert(item) {
    return {}
  }

  update(id, item) {
    return {}
  }

  delete(id) {
    return {}
  }
}
