function Node(name, attributes) {
  this.name = name;
  this.attributes = attributes || {};
}

Node.prototype.getAttributesAsLine = function getAttributesAsLine() {
  return Object.keys(this.attributes).map(key =>
    ` ${key}="${this.attributes[key]}"`)
    .join('');
};

export default Node;
