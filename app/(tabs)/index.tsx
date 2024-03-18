import { FlatList, StyleSheet, Text } from 'react-native'

import { fetchTopRatedMovies } from '@/api/movies'
import { View } from '@/components/Themed'
import { useEffect, useState } from 'react'

export default function TabOneScreen() {
	const [movies, setMovies] = useState<Movie[]>([])

	useEffect(() => {
		const fetchMovies = async () => {
			const movies: Movie[] = await fetchTopRatedMovies()

			setMovies(movies)
		}

		fetchMovies()
	}, [])

	return (
		<View style={styles.container}>
			<FlatList
				data={movies}
				renderItem={({ item }) => (
					<View>
						<Text>{item.title}</Text>
					</View>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})
