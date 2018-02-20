import Node from './Node';

function childrenString(children) {
  return children.reduce((acc, el) =>
    acc + el.toString(), '');
}

function toString() {
  const { name, body } = this;
  const attributes = this.getAttributes();
  const children = childrenString(this.children);
  return `<${name}${attributes}>${children}${body}</${name}>`;
}

export default function PairedTag(name, attributes, body, children) {
  Node.apply(this, [name, attributes]);
  this.body = body || '';
  this.children = children || [];
  this.toString = toString;
}
