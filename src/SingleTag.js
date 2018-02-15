import Node from './Node';

export default class extends Node {
  constructor(name, attributes = {}) {
    super(name, attributes);
  }

  toString() {
    const { name } = this;
    const attributes = this.attributesString();
    return `<${name}${attributes}>`;
  }
}

