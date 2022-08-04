import PropTypes from 'prop-types';

const FirstApp = ({title, subtitulo, name}) => {
	return (
		<>
			<h1>{title}</h1>
			<h1>{subtitulo + 1}</h1>
			<h1>{name}</h1>
		</>
	);
};

FirstApp.propTypes = {
	subtitulo: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
	name: 'Checho González',
	subtitulo: 'No hay subtitulo',
	title: 'No hay titulo',
};
export {FirstApp};
