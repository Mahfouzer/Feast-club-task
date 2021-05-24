import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import MovieCard from '../MovieCard';

function MoviesList() {
    const { navigate } = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.MovieListContainer}>
            <TouchableOpacity style={styles.MovieStyle} onPress={() => navigate("MovieDetails")}>
                <MovieCard />
            </TouchableOpacity>

            <TouchableOpacity style={styles.MovieStyle} onPress={() => navigate("MovieDetails")}>
                <MovieCard />
            </TouchableOpacity>

            <TouchableOpacity style={styles.MovieStyle} onPress={() => navigate("MovieDetails")}>
                <MovieCard />
            </TouchableOpacity>


            <TouchableOpacity style={styles.MovieStyle} onPress={() => navigate("MovieDetails")}>
                <MovieCard />
            </TouchableOpacity>

            <TouchableOpacity style={styles.MovieStyle} onPress={() => navigate("MovieDetails")}>
                <MovieCard />
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    MovieListContainer: { alignItems: 'center', justifyContent: 'center' },
    MovieStyle: { alignSelf: "stretch" }
})

export default MoviesList;