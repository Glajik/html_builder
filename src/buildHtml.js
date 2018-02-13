import { find, identity } from 'lodash'; // eslint-disable-line

const singleTagsList = new Set(['hr', 'img', 'br']);

const parseDispatcher = [
  {
    name: 'body', 
    check: v => typeof v === 'string',
    toAst: (acc, value) => ({ ...acc, 'body': value })
  }, 
  {
    name: 'children', 
    check: v => v instanceof Array,
    toAst: (acc, value) => ({ ...acc, 'children': value.map(data => parse(data)) })
  },
  {
    name: 'attribute', 
    check: v => v instanceof Object,
    toAst: (acc, value) => ({ ...acc, 'attributes': value })
  }
];

export const parse = (data) => {

  const [ name, ...rest ] = data;

  const ast = { 
    'name': name,
    'attributes': {},
    'body': '',
    'children': [],
    ...rest.reduce((acc, value) => 
      parseDispatcher
      .find(obj => obj.check(value))
      .toAst(acc, value)  , {})
  };

  return ast;
};

export const render = (ast) => {
  const { name, attributes } = ast;

  const newAttributes = Object.keys(attributes).map(key => ` ${key}="${attributes[key]}"`).join('');

  if (singleTagsList.has(name)) return `<${name}${newAttributes}>`;

  const { body, children } = ast;

  const newChildren = children.reduce((acc, value) => acc + render(value), '');
  
  return `<${name}${newAttributes}>${newChildren}${body}</${name}>`;
};


