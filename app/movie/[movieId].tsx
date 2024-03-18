import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const MovieDetailsPage = () => {
	const { movieId } = useLocalSearchParams()

	return (
		<View style={styles.container}>
			<Text>{movieId}</Text>
		</View>
	)
}

export default MovieDetailsPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
})
