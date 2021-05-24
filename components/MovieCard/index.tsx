import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useQuery } from 'react-query';
import API from '../../api';
import { COLORS, FONT_SIZES } from '../../constants'
import TagsList from '../TagsList'

export default function index({ movieData }: any) {

    const { navigate } = useNavigation();

    const { data: fullMovieData, isLoading: isFullMovieDataLoading } = useQuery([movieData.id, "movie"], () => API.fetchMovie(movieData.id));

    return (
        <TouchableOpacity onPress={() => navigate("MovieDetails", { data: fullMovieData })}>
            <View style={styles.movieContainer}>
                <Image style={styles.moviePoster} source={{ uri: `https://image.tmdb.org/t/p/w300/${movieData.poster_path}` }} />
                <View style={styles.movieDetails}>
                    <Text style={styles.MovieName}>{movieData.title}</Text>
                    <Text style={styles.movieDate}>{movieData.release_date}</Text>
                    <View style={styles.tagsContainer}>
                        {isFullMovieDataLoading || <TagsList tags={fullMovieData?.data.genres.map((genre: any) => genre.name)} />}
                    </View>
                    <Text style={styles.movieRating}>{movieData.vote_average && `${movieData.vote_average * 10}%`}</Text>
                </View>

            </View>
        </TouchableOpacity>
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
        height: 55,
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
