import { fetchSingleMovieById } from '@/api/movies'
import { useQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import {
	ActivityIndicator,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	View
} from 'react-native'

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

	const dynamicHeader = isPending ? 'Loading...' : data?.title

	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={{
					uri: `https://image.tmdb.org/t/p/w500${data?.backdrop_path}`
				}}
				style={{
					width: '100%',
					height: 300,
					borderRadius: 5
				}}
			/>
			<View style={{ padding: 10 }}>
				<Text
					style={{
						fontSize: 24,
						fontWeight: '500',
						marginVertical: 10
					}}
				>
					{data?.title}
				</Text>
				<Text
					style={{ fontSize: 16, fontWeight: '500', lineHeight: 20 }}
				>
					{data?.overview}
				</Text>
			</View>
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
