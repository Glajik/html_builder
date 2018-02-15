export default class {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  attributesString() {
    return Object.keys(this.attributes).map(key =>
      ` ${key}="${this.attributes[key]}"`)
      .join('');
  }

  toString() {
    return this.name.toString();
  }
}
