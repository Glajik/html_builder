import _ from 'lodash';

const buildHtml = (tag) => {
  if (tag instanceof Array != true) return '';

	const [ name, ...rest ] = tag;

	const { attributes, children, body } = rest.reduce( (acc, value) => {
		// Children
		if (value instanceof Object && value instanceof Array) {
			return { ...acc, 'children': value.reduce( (cAcc, cTag) => cAcc + buildHtml(cTag), '') };			
		}
		// Attributes
		if (value instanceof Object) {
			const output = Object.keys(value).reduce( (aAcc, key) => {
				return aAcc + ` ${key}="${value[key]}"`;
			}, '');
			return { ...acc, 'attributes': output };
		}
		// Body
		if (typeof value === 'string') {
			return { ...acc, 'body': value };
		}
		return acc; 
	}, {} );

	return `<${name}${attributes || ''}>${children || ''}${body || ''}</${name}>`;
}

export default buildHtml;
