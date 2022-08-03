const API_KEY = 'MmaAePpUBjduMU9xrD1IhFKDAWhxDftD';
const API_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const API = fetch(API_URL)
	.then(response => response.json())
	.then(({data}) => {
		const {url} = data.images.original;
		const img = document.createElement('img');
		img.src = url;
		document.body.append(img);
	})
	.catch(console.warn);