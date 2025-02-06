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

    this.indexValue = nextIndex;
    this.showSlide(this.indexValue);
    this.createVisit(this.indexValue);
  }

  prev(event) {
    event.preventDefault();
    let prevIndex = this.indexValue - 1;

    if (prevIndex < 0) {
      prevIndex = this.slideTargets.length - 1;
    }

    this.indexValue = prevIndex;
    this.showSlide(this.indexValue);
    this.createVisit(this.indexValue);
  }


  showSlide(index) {
    this.slideTargets.forEach((slide) => slide.classList.add("hidden"));
    this.slideTargets[index].classList.remove("hidden");
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
