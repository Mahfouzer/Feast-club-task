import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

function MoviesList() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('HomeB')}>
                <Text>Movie</Text>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default MoviesList;