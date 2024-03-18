import { fetchSingleMovieById } from '@/api/movies'
import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { ActivityIndicator, SafeAreaView, StyleSheet, Text } from 'react-native'

const MovieDetailsPage = () => {
	const { movieId } = useLocalSearchParams()

	const { data, error, isError, isPending } = useQuery({
		queryKey: ['fetchMovieDetails', { movieId }],
		queryFn: () => fetchSingleMovieById(movieId as string)
	})

	if (isError) {
		return (
			<SafeAreaView
				style={[styles.container, { backgroundColor: 'red' }]}
			>
				<Text
					style={{ fontWeight: '700', color: 'white', fontSize: 36 }}
				>
					{`Error: ${error.message}`}
				</Text>
			</SafeAreaView>
		)
	}

	if (isPending) {
		return (
			<SafeAreaView style={styles.container}>
				<ActivityIndicator style={{ flex: 1 }} />
			</SafeAreaView>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<Text>{JSON.stringify(data)}</Text>
		</SafeAreaView>
	)
}

export default MovieDetailsPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		paddingTop: 100,
		paddingHorizontal: 10
	}
})
