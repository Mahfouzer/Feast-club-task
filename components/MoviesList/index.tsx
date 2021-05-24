import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import MovieCard from '../MovieCard';

function MoviesList() {
    const { navigate } = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#f1f1f1" }}>
            <TouchableWithoutFeedback onPress={() => navigate('MovieDetails')}>
                <Text>go to Movie Details</Text>
            </TouchableWithoutFeedback>
            <MovieCard />
        </View>
    );
}

export default MoviesList;