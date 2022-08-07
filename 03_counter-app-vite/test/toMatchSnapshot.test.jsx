import {render} from '@testing-library/react';
import {toMatchSnapshot} from '../src/toMatchSnapshot';

describe('Pruebas en <toMatchSnapshot/>', () => {
	test('Debe hacer match con el snapshot', () => {
		const title = 'Hola, soy Gokú';
		const {container} = render(<toMatchSnapshot title={title} />);
		// console.log(container);
		
		expect(container).toMatchSnapshot();
	});
	test('Debe de mostrar el título en un h1', () => {
		const title = 'Hola, soy Gokú';
		const {container, getByText} = render(<toMatchSnapshot title={title} />);
		// console.log(container);
		expect(getByText(title)).toBeTruthy();
		
		const h1 = container.querySelector('h1');
		console.log(h1.innerHTML);
		expect(h1.innerHTML).toContain(title);
	});
});