import buildHtml from '../src/buildHtml';

describe('HtmlBuilder', () => {
	it('set 0', () => {
		const data = 'text';
		const actual = buildHtml(data);
		expect(actual).toBe('');
	});

	it('set 1', () => {
		const data = ['html'];
		const actual = buildHtml(data);
		expect(actual).toBe('<html></html>');
	});

	it('set 2', () => {
		const data = ['title', 'hello, hexlet!'];
		const actual = buildHtml(data);
		expect(actual).toBe('<title>hello, hexlet!</title>');
	});

	it('set 3', () => {
		const data = ['body', { class: 'container' }];
		const actual = buildHtml(data);
		expect(actual).toBe('<body class="container"></body>');
	});

	it('set 4', () => {
		const data = ['html', [
									['head'], 
									['body', { class: 'container' }, 'Hello world!']
								]];
		const actual = buildHtml(data);
		expect(actual).toBe('<html><head></head><body class="container">Hello world!</body></html>');
	});

  it('set 1', () => {
    const data = ['html', [
      ['head', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', { class: 'container' }, [
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['span'],
          ['span', { class: 'text', id: 'uniq-key' }],
        ]],
      ]],
    ]];

    const actual = buildHtml(data);
    const expected = `<html><head><title>hello, hexlet!</title></head><body class="container"><h1 class="header">html builder example</h1><div><span></span><span class="text" id="uniq-key"></span></div></body></html>`;
    expect(actual).toBe(expected);
  });


  it('set 2', () => {
    const data = ['html', [
      ['body', [
        ['h2', { class: 'header' }, 'first header'],
        ['div', [
          ['p', 'hello, world'],
          ['p', 'good bye, world'],
          ['a', { class: 'link', href: 'https://hexlet.io' }, 'hexlet.io'],
        ]],
      ]],
    ]];

    const actual = buildHtml(data);
    const expected = `<html><body><h2 class="header">first header</h2><div><p>hello, world</p><p>good bye, world</p><a class="link" href="https://hexlet.io">hexlet.io</a></div></body></html>`;
    expect(actual).toBe(expected);
  });

});
