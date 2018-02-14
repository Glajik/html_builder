import { find, identity } from 'lodash'; // eslint-disable-line
import buildNode from './buildNode';

const parseDispatcher = [
  {
    name: 'body',
    check: v => typeof v === 'string',
    get: (acc, value) => ({ ...acc, body: value }),
  },
  {
    name: 'children',
    check: v => v instanceof Array,
    get: (acc, value) => ({ ...acc, children: value.map(el => parse(el)) }),
  },
  {
    name: 'attribute',
    check: v => v instanceof Object,
    get: (acc, value) => ({ ...acc, attributes: value }),
  },
];

const parse = (data) => {
  const [name, ...rest] = data;

  const { attributes, body, children } = {
    ...rest.reduce(
      (acc, value) =>
        parseDispatcher.find(obj =>
          obj.check(value)).get(acc, value),
      {}
    ),
  };

  return buildNode(name, attributes, body, children);
};

export default parse;