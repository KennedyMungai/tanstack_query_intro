import { ActivityIndicator, FlatList, StyleSheet, Text } from 'react-native'

import { fetchTopRatedMovies } from '@/api/movies'
import { View } from '@/components/Themed'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

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
			<View style={styles.container}>
				<ActivityIndicator size={36} />
			</View>
		)
	}

	if (isTopRatedMoviesError) {
		return (
			<View style={styles.container}>
				<Text>{`Error - ${topRatedMoviesError.message}`}</Text>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={topRatedMoviesData}
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
