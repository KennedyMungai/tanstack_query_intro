import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

const MovieDetailsPage = () => {
	const { movieId } = useLocalSearchParams()

	return (
		<SafeAreaView style={styles.container}>
			<Text>{movieId}</Text>
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
