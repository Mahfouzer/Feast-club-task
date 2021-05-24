import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import MovieCard from '../MovieCard';

function MoviesList({ list, isLodingList, hasError }: any) {

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


export default MoviesList;