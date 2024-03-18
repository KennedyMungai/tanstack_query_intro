import {
	ActivityIndicator,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text
} from 'react-native'

import { fetchTopRatedMovies } from '@/api/movies'
import MovieListItem from '@/components/MovieListItem'
import { useQuery } from '@tanstack/react-query'

export default function TabOneScreen() {
	const {
		data: topRatedMoviesData,
		error: topRatedMoviesError,
		isError: isTopRatedMoviesError,
		isPending: isTopRatedMoviesPending
	} = useQuery({
		queryKey: ['fetchTopRatedMovies'],
		queryFn: fetchTopRatedMovies
	})

	if (isTopRatedMoviesPending) {
		return (
			<SafeAreaView style={styles.container}>
				<ActivityIndicator size={36} />
			</SafeAreaView>
		)
	}

	if (isTopRatedMoviesError) {
		return (
			<SafeAreaView style={styles.container}>
				<Text
					style={{ fontSize: 30, color: 'red', textAlign: 'center' }}
				>{`Error - ${topRatedMoviesError.message}`}</Text>
			</SafeAreaView>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={topRatedMoviesData}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => <MovieListItem movie={item} />}
			/>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		paddingVertical: 10
	}
})
