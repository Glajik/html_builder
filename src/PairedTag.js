export default class PairedTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  attributesString() {
    return Object.keys(this.attributes).map(key =>
      ` ${key}="${this.attributes[key]}"`)
      .join('');
  }

  childrenString() {
    return this.children.reduce((acc, el) =>
      acc + el.toString(), '');
  }

  toString() {
    const { name, body } = this;
    const attributes = this.attributesString();
    const children = this.childrenString();
    return `<${name}${attributes}>${children}${body}</${name}>`;
  }
}
