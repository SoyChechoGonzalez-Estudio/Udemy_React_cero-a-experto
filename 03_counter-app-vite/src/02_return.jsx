const getResult = (a, b) => {
	return a + b;
};

const newMessage = {
	message: 'Hola, Qué tal mi perro',
	title: 'Checho'
};
const FirstApp = () => {
	return (
		<>
			<h1>Hola Mundo</h1>
			<code>{JSON.stringify(newMessage)}</code>
			<h1>{getResult(1, 10)}</h1>
			<p>Soy un subtitulo</p>
		</>
	);
};

export {FirstApp};
