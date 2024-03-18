import { StyleSheet } from 'react-native'

import { fetchTopRatedMovies } from '@/api/movies'
import { View } from '@/components/Themed'
import { useEffect, useState } from 'react'

export default function TabOneScreen() {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		const fetchMovies = async () => {
			const movies = await fetchTopRatedMovies()

			setMovies(movies)
		}

		fetchMovies()
	}, [])

	return <View style={styles.container}></View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
