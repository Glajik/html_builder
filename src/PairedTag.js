import Node from './Node';

export default class extends Node {
  constructor(name, attributes = {}, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
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
