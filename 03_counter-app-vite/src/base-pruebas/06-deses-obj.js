const usContext = ({clave, yearsOld, latitude, longitude}) => {
	return {
		nombreClave: clave,
		anios: yearsOld,
		latlng: {
			lat: latitude,
			lng: longitude
		}
	};
	
};

export {usContext};