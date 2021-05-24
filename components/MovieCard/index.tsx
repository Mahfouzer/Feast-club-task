import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { COLORS, FONT_SIZES } from '../../constants'
import TagsList from '../TagsList'

export default function index() {
    return (
        <View style={styles.movieContainer}>
            <Image style={styles.moviePoster} source={require('../../assets/images/movieThumbnail.png')} />
            <View style={styles.movieDetails}>

                <Text style={styles.MovieName}>Movie Card</Text>
                <Text style={styles.movieDate}>23, May 2020</Text>
                <View style={styles.tagsContainer}>
                    <TagsList tags={["old", "great"]} />
                </View>
                <Text style={styles.movieRating}>60%</Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    movieContainer: {
        height: 170,
        borderRadius: 10,
        alignSelf: 'stretch',
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
        height: 150,
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
        marginRight: 10,
        color: COLORS.GREEN,
        fontWeight: "bold",
        fontSize: FONT_SIZES.SUBHEADING,
        marginTop: -7
    }
})
