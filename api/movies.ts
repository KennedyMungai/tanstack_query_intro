const fetchTopRatedMovies = () => {
	const url = `https://api.themoviedb.org/3/movie/157336/videos?api_key=${process.env.API_KEY}`

	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${process.env.API_READ_ACCESS_TOKEN}`
		}
	}

	fetch(url, options)
		.then((res) => res.json())
		.then((json) => console.log(json))
		.catch((err) => console.error('Error ' + err))
}
