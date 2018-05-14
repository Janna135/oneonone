import { $, $$ } from './utils/helpers.js'

export default class Header {
  constructor(sel) {
    this.el = $(sel)
    this.btn = this.el.querySelector('.js-settings')
    this.btn.addEventListener('click', e => this.onClick(e))
  }

  onClick(event) {
    console.log('clicked settings')
  }
}
