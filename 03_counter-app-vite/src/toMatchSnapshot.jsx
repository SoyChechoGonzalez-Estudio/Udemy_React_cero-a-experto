import PropTypes from 'prop-types';

const toMatchSnapshot = ({title, subtitle, name}) => {
	return (
		<>
			<h1>{title}</h1>
			<h1>{subtitle}</h1>
			<h1>{name}</h1>
		</>
	);
};

toMatchSnapshot.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string
};
toMatchSnapshot.defaultProps = {
	title: 'Checho González',
	subtitle: 'No hay title',
	name: 'Checho'
};
export {toMatchSnapshot};