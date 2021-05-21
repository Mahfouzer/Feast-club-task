import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

function MoviesList() {
    const { navigate } = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <TouchableWithoutFeedback onPress={() => navigate('MovieDetails')}>
                <Text>go to Movie Details</Text>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default MoviesList;