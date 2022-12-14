import PropTypes from 'prop-types';

const FirstApp = ({title, subtitle, name}) => {
	return (
		<>
			<h1 data-testid='test-title'>{title}</h1>
			<h1>{subtitle}</h1>
			<h1>{subtitle}</h1>
			<h1>{name}</h1>
		</>
	);
};

FirstApp.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string
};
FirstApp.defaultProps = {
	title: 'Checho González',
	subtitle: 'No hay subtitle',
	name: 'Checho'
};
export {FirstApp};