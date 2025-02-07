import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["slide"];

  connect() {
    this.indexValue = 0;
    this.showSlide(this.indexValue);
  }

  next(event) {
    event.preventDefault();
    let nextIndex = this.indexValue + 1;

    if (nextIndex >= this.slideTargets.length) {
      nextIndex = 0;
    }

    this.showSlide(nextIndex, "slide-in-right", "slide-out-left");
    this.createVisit(nextIndex);
  }

  prev(event) {
    event.preventDefault();
    let prevIndex = this.indexValue - 1;

    if (prevIndex < 0) {
      prevIndex = this.slideTargets.length - 1;
    }

    this.showSlide(prevIndex, "slide-in-left", "slide-out-right");
    this.createVisit(prevIndex);
  }

  showSlide(index, inDirection, outDirection) {
    const oldSlide = this.slideTargets[this.indexValue];
    const newSlide = this.slideTargets[index];
    oldSlide.classList.add(outDirection);

    this.slideAnimation(oldSlide, newSlide, outDirection, inDirection)

    this.indexValue = index;
  }

  slideAnimation(oldSlide, newSlide, outDirection, inDirection) {
    oldSlide.addEventListener('animationend', () => {
      oldSlide.classList.add("hidden");
      oldSlide.classList.remove(outDirection);

      newSlide.classList.remove("hidden");
      newSlide.classList.add(inDirection);

      newSlide.addEventListener('animationend', () => {
        newSlide.classList.remove(inDirection);
      }, { once: true });
    }, { once: true });
  }

  createVisit(index) {
    const imageId = this.slideTargets[index].id;
    const url = `/images/${imageId}/create_visit`;

    fetch(url, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': document.querySelector('[name="csrf-token"]').content,
        'Accept': 'text/vnd.turbo-stream.html'
      }
    })
    .then(response => response.text())
    .then(html => { Turbo.renderStreamMessage(html) });
  }
}
