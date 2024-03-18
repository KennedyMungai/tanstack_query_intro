import { fetchSingleMovieById } from '@/api/movies'
import { addMovieToWatchList } from '@/api/watchList'
import { FontAwesome } from '@expo/vector-icons'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import {
	ActivityIndicator,
	Image,
	Pressable,
	SafeAreaView,
	StyleSheet,
	Text,
	View
} from 'react-native'

const MovieDetailsPage = () => {
	const { movieId } = useLocalSearchParams()

	const {
		data: singleMovieData,
		error: singleMovieError,
		isError: isSingleMovieError,
		isPending: isSingleMoviePending
	} = useQuery({
		queryKey: ['fetchMovieDetails', { movieId }],
		queryFn: () => fetchSingleMovieById(movieId as string)
	})

	const {
		data: watchListData,
		isPending: isWatchListPending,
		isError: isWatchListError,
		error: watchListError,
		mutate: watchListMutate
	} = useMutation({
		mutationKey: ['addMovieToWatchList', { movieId }],
		mutationFn: () => addMovieToWatchList(+movieId)
	})

	if (isSingleMovieError) {
		return (
			<SafeAreaView
				style={[styles.container, { backgroundColor: 'red' }]}
			>
				<Text
					style={{ fontWeight: '700', color: 'white', fontSize: 36 }}
				>
					{`Error: ${singleMovieError.message}`}
				</Text>
			</SafeAreaView>
		)
	}

	if (isSingleMoviePending) {
		return (
			<SafeAreaView style={styles.container}>
				<ActivityIndicator style={{ flex: 1 }} />
			</SafeAreaView>
		)
	}

	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={{
					uri: `https://image.tmdb.org/t/p/w500${singleMovieData?.backdrop_path}`
				}}
				style={{
					width: '100%',
					height: 300,
					borderRadius: 5
				}}
			/>
			<View style={{ padding: 10 }}>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					<Text
						style={{
							fontSize: 24,
							fontWeight: '500',
							marginVertical: 10
						}}
					>
						{singleMovieData?.title}
					</Text>
					<Pressable onPress={() => watchListMutate()}>
						<FontAwesome name={'bookmark-o'} size={24} />
					</Pressable>
				</View>
				<Text
					style={{ fontSize: 16, fontWeight: '500', lineHeight: 20 }}
				>
					{singleMovieData?.overview}
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
