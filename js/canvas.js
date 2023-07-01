export default class Canvas {
  constructor() {
    this.element = document.createElement("canvas");
    this.ctx = this.element.getContext("2d");
    this.className = this.element.classList.add("canvas");

    this.element.width = 320;
    this.element.height = 400;
  }
}
