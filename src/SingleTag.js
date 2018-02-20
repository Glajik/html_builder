import Node from './Node';

export default function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype.toString = function toString() {
  const { name } = this;
  const attributes = this.getAttributesAsLine();
  return `<${name}${attributes}>`;
};
