
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';


export default function MovieDetails() {

    const { navigate } = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
            <TouchableWithoutFeedback onPress={() => navigate('Movies')}>
                <Text>Movie Details</Text>
            </TouchableWithoutFeedback>

        </View>
    );
}
