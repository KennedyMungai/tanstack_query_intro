import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

type Props = {
	movie: Movie
}

const MovieListItem = ({ movie }: Props) => {
	return (
		<View style={styles.cardContainer}>
			<Text style={styles.cardTitle}>{movie.title}</Text>
			<View
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Image
					source={{
						uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
					}}
					style={{
						width: '100%',
						aspectRatio: 1,
						borderRadius: 5,
						height: 'auto'
					}}
				/>
			</View>
		</View>
	)
}

export default MovieListItem

const styles = StyleSheet.create({
	cardContainer: {
		width: '95%',
		height: 'auto',
		marginTop: 20,
		display: 'flex',
		justifyContent: 'center'
	},
	cardTitle: {
		fontSize: 26,
		fontWeight: '700',
		color: '#C1C1C1',
		textTransform: 'uppercase',
		position: 'absolute',
		top: 10,
		left: 20,
		zIndex: 10
	}
})
