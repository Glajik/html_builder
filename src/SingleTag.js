import Node from './Node';

function toString() {
  const { name } = this;
  const attributes = this.getAttributes();
  return `<${name}${attributes}>`;
}

export default function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes]);
  this.toString = toString;
}

