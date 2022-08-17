import React from 'react';

const Small = React.memo(({value}) => {
	console.log('Me vuelvo a dibujar');
	return (
		<>
			<small>{value}</small>
		</>
	);
});

export {Small};