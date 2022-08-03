const getImagen = async () => {
	try {
		const API_KEY = 'MmaAePpUBjduMU9xrD1IhFKDAWhxDftD';
		const API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
		
		const response = await fetch(API_URL);
		const {data} = await response.json();
		const {url} = data.images.original;
		
		const img = document.createElement('img');
		img.src = url;
		document.body.append(img);
		
	} catch (error) {
		// Maneja del error
		console.log(error);
	}
};
getImagen();