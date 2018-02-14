import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

const singleTagsList = new Set(['hr', 'img', 'br']);

const buildNode = (name, attributes, body, children) => {
  if (singleTagsList.has(name)) {
    return new SingleTag(name, attributes);
  }

  return new PairedTag(name, attributes, body, children);
};

export default buildNode;
