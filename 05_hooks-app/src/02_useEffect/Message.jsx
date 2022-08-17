import {useEffect, useState} from 'react';

const Message = () => {
	const [coords, setCoords] = useState({x: 0, y: 0});
	useEffect(() => {
		// console.log('Message Mounted');
		const handleMouseMove = ({x, y}) => {
			// const coords = {x, y};
			setCoords({x, y});
			// console.log(coords);
		};
		window.addEventListener('mousemove', handleMouseMove);
		
		return () => {
			// console.log('Message UnMounted');
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
	return (
		<>
			<h1>Usuario ya está registrado</h1>
			{
				JSON.stringify(coords)
			}
		</>
	);
};

export {Message};