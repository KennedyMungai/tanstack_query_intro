export const fetchTopRatedMovies = () =>
	fetch(process.env.API_URL!)
		.then((res) => res.json())
		.then((json) => console.log(json))
		.catch((err) => console.log(err))
