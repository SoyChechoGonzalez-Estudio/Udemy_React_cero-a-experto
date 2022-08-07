import {render} from '@testing-library/react';
import {FirstApp} from '../src/FirstApp';

describe('Pruebas en <FirstApp/>', () => {
	/*test('Debe hacer match con el snapshot', () => {
		const title = 'Hola, soy Gokú';
		const {container} = render(<FirstApp title={title} />);
		// console.log(container);
		
		expect(container).toMatchSnapshot();
	});*/
	test('Debe de mostrar el título en un h1', () => {
		const title = 'Hola, soy Gokú';
		const {container, getByText, getByTestId} = render(<FirstApp title={title} />);
		// console.log(container);
		expect(getByText(title)).toBeTruthy();
		
		/*const h1 = container.querySelector('h1');
		console.log(h1.innerHTML);
		expect(h1.innerHTML).toContain(title);*/
		expect(getByTestId('test-title').innerHTML).toContain(title);
	});
	test('Debe mostrar un subtitulo enviado por props', () => {
		const title = 'Hola, soy Gokú';
		const subtitle = 'Soy un subtitulo';
		const {getAllByText} = render(
			<FirstApp
				title={title}
				subtitle={subtitle}
			/>
		);
		// console.log(container);
		expect(getAllByText(subtitle).length).toBe(2);
	});
});