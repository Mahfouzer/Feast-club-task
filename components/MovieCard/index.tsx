import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS, FONT_SIZES } from '../../constants'
import TagsList from '../TagsList'

export default function index({ movieData }: any) {

    console.log(movieData);
    return (
        <View style={styles.movieContainer}>
            <Image style={styles.moviePoster} source={{ uri: `https://image.tmdb.org/t/p/w300/${movieData.poster_path}` }} />
            <View style={styles.movieDetails}>

                <Text style={styles.MovieName}>{movieData.title}</Text>
                <Text style={styles.movieDate}>{movieData.release_date}</Text>
                <View style={styles.tagsContainer}>
                    <TagsList tags={["old", "great"]} />
                </View>
                <Text style={styles.movieRating}>{movieData.vote_average && `${movieData.vote_average * 10}%`}</Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    movieContainer: {
        height: 200,
        borderRadius: 10,
        margin: 15,
        backgroundColor: COLORS.WHITE,
        flexDirection: 'row',
    },
    MovieName: {
        fontSize: FONT_SIZES.HEADING,
        fontWeight: "bold", margin: 10
    },
    movieDate: { marginLeft: 10 },
    moviePoster: {
        height: 180,
        width: 100,
        margin: 10,
        borderRadius: 10
    },
    tagsContainer: {
        height: 80,
        marginLeft: -10
    },
    movieDetails: {
        flex: 1,
    },
    movieRating: {
        alignSelf: "flex-end",
        color: COLORS.GREEN,
        fontWeight: "bold",
        fontSize: FONT_SIZES.SUBHEADING,
        position: "absolute",
        bottom: 10,
        right: 10
    }
})
