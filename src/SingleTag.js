export default class SingleTag {
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
    const { name } = this;
    const attributes = this.attributesString();
    return `<${name}${attributes}>`;
  }
}

