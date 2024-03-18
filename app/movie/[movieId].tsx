import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const MovieDetailsPage = () => {
    const {movieId} = useLocalSearchParams()

	return (
		<View>
			<Text>MovieDetailsPage</Text>
		</View>
	)
}

export default MovieDetailsPage
