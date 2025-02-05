import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["slide"];

  connect() {
    this.indexValue = 0;
    this.showSlide(this.indexValue);
  }

  next() {
    let nextIndex = this.indexValue + 1;

    if (nextIndex >= this.slideTargets.length) {
      nextIndex = 0;
    }

    this.indexValue = nextIndex;
    this.showSlide(this.indexValue);
  }

  prev() {
    let prevIndex = this.indexValue - 1;

    if (prevIndex < 0) {
      prevIndex = this.slideTargets.length - 1;
    }

    this.indexValue = prevIndex;
    this.showSlide(this.indexValue);
  }


  showSlide(index) {
    this.slideTargets.forEach((slide) => slide.classList.add("hidden"));
    this.slideTargets[index].classList.remove("hidden");
  }
}
