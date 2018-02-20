import Node from './Node';

export default function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype = Object.create(Node.prototype);

SingleTag.prototype.toString = function toString() {
  const { name } = this;
  const attributes = this.getAttributesAsLine();
  return `<${name}${attributes}>`;
};
