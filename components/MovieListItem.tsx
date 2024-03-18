import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

type Props = {
	movie: Movie
}

const MovieListItem = ({ movie }: Props) => {
	return (
		<View style={styles.cardContainer}>
			<Text>{movie.title}</Text>
		</View>
	)
}

export default MovieListItem

const styles = StyleSheet.create({
	cardContainer: { width: '100%', height: 50 }
})
