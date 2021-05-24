import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MovieCard from '../MovieCard';

function MoviesList({ list, isLodingList, hasError }: any) {
    const { navigate } = useNavigation();

    if (isLodingList) return <Text>loading ...</Text>;
    if (hasError) return <Text>Something went wrong please try again later</Text>

    return (
        <View>
            <FlatList
                data={list}
                renderItem={({ item }: any) =>
                    <MovieCard movieData={item} />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    MovieListContainer: { alignItems: 'center', justifyContent: 'center' },
    MovieStyle: { alignSelf: "stretch" }
})

export default MoviesList;