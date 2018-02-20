import Node from './Node';

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}

const childrenString = children =>
  children.reduce((acc, el) =>
    acc + el.toString(), '');

PairedTag.prototype.toString = function toString() {
  const { name, body } = this;
  const attributes = this.getAttributesAsLine();
  const children = childrenString(this.children);
  return `<${name}${attributes}>${children}${body}</${name}>`;
}
