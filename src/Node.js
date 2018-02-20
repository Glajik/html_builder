function getAttributes() {
  return Object.keys(this.attributes).map(key =>
    ` ${key}="${this.attributes[key]}"`)
    .join('');
}

function toString() {
  return this.name.toString();
}

export default function Node(name, attributes) {
  this.name = name;
  this.attributes = attributes || {};
  this.getAttributes = getAttributes;
  this.toString = toString;
}