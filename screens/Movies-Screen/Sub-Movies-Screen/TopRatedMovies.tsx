import React from 'react'
import { View, Text } from 'react-native'
import { useQuery } from 'react-query';
import API from '../../../api';
import MoviesList from '../../../components/MoviesList'

export default function TopRatedMovies() {

    const { isError, isLoading, data, refetch } = useQuery('TopRatedMovies', () => API.fetchTopRatedMovies());


    return (
        <View>
            <MoviesList />
        </View>
    )
}
