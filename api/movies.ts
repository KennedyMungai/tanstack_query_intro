export const fetchTopRatedMovies = () =>
	fetch(
		`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env
			.API_KEY!}`
	)
		.then((res) => res.json())
		.then((json) => console.log(json))
		.catch((err) => console.log(err))
