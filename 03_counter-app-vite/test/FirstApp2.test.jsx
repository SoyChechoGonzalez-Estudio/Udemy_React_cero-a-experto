import {render, screen} from '@testing-library/react';
import {FirstApp} from '../src/FirstApp';

describe('Pruebas en <FirstApp/>', () => {
	const title = 'Hola, soy Gokú';
	const subtitle = 'Soy un subtitulo';
	test('Debe hacer match con el snapshot', () => {
		const {container} = render(
			<FirstApp title={title} />
		);
		expect(container).toMatchSnapshot();
	});
	test('Debe mostrart el mensaje "Hola, soy Gokú"', () => {
		render(<FirstApp title={title} />);
		expect(screen.getByText(title)).toBeTruthy();
		// screen.debug();
	});
	test('Debe de mostrar el título en un H1', () => {
		render(<FirstApp title={title} />);
		expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
	});
	test('Debe de mostrar el subtítulo enviado por props', () => {
		render(
			<FirstApp title={title}
			          subtitle={subtitle}
			/>
		);
		expect(screen.getAllByText(subtitle).length).toBe(2);
		
	});
	
});