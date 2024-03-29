export default class AccentTypographyBuild {
  constructor(elementSelector, timer, classForActivate, property, delay = 0) {
    this.TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;
    this._delay = delay;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;

    this.prepareText();
  }

  _randomInteger(min, max) {
    let integer = min + Math.random() * (max + 1 - min);

    return Math.floor(integer);
  }

  _setTimeOffset(spansNodeList, wordOrderNumber) {
    const lengthUseful = 4;
    const cycles = Math.ceil(spansNodeList.length / lengthUseful);
    let startIndex;

    for (let i = 0; i <= cycles; i++) {
      startIndex = i === 0 ? 0 : (startIndex = i * lengthUseful);

      const spans = Array.prototype.slice.apply(spansNodeList, [
        startIndex,
        startIndex + lengthUseful,
      ]);

      spans.forEach((span) => {
        const up = wordOrderNumber === 0 ? 1 : 2;
        const timeOffset = this._randomInteger(100 * up, 250 * up);

        span.style.transition = `${this._property} ${this._timer}ms ease ${this._delay + timeOffset}ms`;
      });
    }
  }

  createElement(letter) {
    const span = document.createElement(`span`);

    span.textContent = letter;

    return span;
  }

  getTransition() {
    return `${this.property} ${this.timer}ms ease ${
      this.delay + this.timeOffset
    }ms`;
  }

  prepareText() {
    if (!this._element) {
      return;
    }

    const text = this._element.textContent
      .trim()
      .split(` `)
      .filter((letter) => letter !== ``);
    const content = text.reduce((fragmentParent, word, i) => {
      const wordContainer = document.createElement(`span`);
      const wordElement = Array.from(word).reduce((fragment, letter) => {
        fragment.appendChild(this.createElement(letter));
        return fragment;
      }, document.createDocumentFragment());

      this._setTimeOffset(wordElement.childNodes, i);

      wordContainer.classList.add(`text__word`);
      wordContainer.appendChild(wordElement);

      fragmentParent.appendChild(wordContainer);

      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }

    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}
