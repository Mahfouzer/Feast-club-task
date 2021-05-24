
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet, Image, ScrollView } from 'react-native';
import { useQuery } from 'react-query';
import API from '../../api';
import { FONT_SIZES } from '../../constants';
import Actorslist from '../ActorsList';
import TagsList from '../TagsList';


export default function MovieDetails({ fullMovieData }: any) {

    const { data: actorsData, isLoading: actorsDataisloading, error: actorsDataerror } = useQuery([fullMovieData.id, "MovieActors"], () => API.fetchActors(fullMovieData.id));

    return (
        <ScrollView contentContainerStyle={styles.Container}>
            <Image style={styles.moviePoster} source={fullMovieData.poster_path ? { uri: `https://image.tmdb.org/t/p/w300/${fullMovieData.poster_path}` } : require('../../assets/images/movieThumbnail.png')} />
            <Text style={styles.movieName}>{fullMovieData.title}</Text>
            <Text style={styles.rating}>{fullMovieData.vote_average && `${fullMovieData.vote_average * 10}%`}</Text>
            <Text style={styles.headerText}>Overview</Text>
            <Text style={styles.overviewText}>{fullMovieData.overview}</Text>
            <Text style={styles.headerText}>Genres</Text>
            <TagsList tags={fullMovieData?.genres.map((genre: any) => genre.name)} />
            <Text style={styles.headerText}>Credits</Text>
            { (actorsDataerror || actorsDataerror) || <Actorslist actors={actorsData?.data.cast} />}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    Container: { alignItems: 'center', backgroundColor: 'white', overflow: "scroll" },
    headerText: { alignSelf: "flex-start", fontSize: FONT_SIZES.SUBHEADING, fontWeight: "bold", paddingLeft: 20 },
    movieName: { fontSize: FONT_SIZES.HEADING, fontWeight: "bold", marginTop: 20, marginBottom: 10 },
    moviePoster: { width: 200, height: 350, marginTop: 10, borderRadius: 10 },
    rating: { color: "green", fontSize: FONT_SIZES.SUBHEADING, fontWeight: "bold", marginBottom: 20 },
    overviewText: { fontSize: FONT_SIZES.NORMAL, paddingLeft: 20, paddingRight: 20, alignSelf: "flex-start", marginBottom: 20 },
});