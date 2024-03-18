import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

type Props = {
	movie: Movie
}

const MovieListItem = ({ movie }: Props) => {
	return (
		<View style={styles.cardContainer}>
			<Text style={styles.cardTitle}>{movie.title}</Text>
		</View>
	)
}

export default MovieListItem

const styles = StyleSheet.create({
	cardContainer: {
		width: '100%',
		height: 200,
		marginVertical: 5
	},
	cardTitle: {
		fontSize: 26,
		fontWeight: '700',
		color: '#C1C1C190',
		textTransform: 'uppercase'
	}
})
