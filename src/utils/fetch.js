export const opcionesEjercicios = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const opcionesYoutube = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBE_API_KEY,
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};
