import React from 'react'
import { View, Text } from 'react-native'
import { useQueries, useQuery } from 'react-query';
import API from '../../../api';
import MoviesList from '../../../components/MoviesList'

export default function TopRatedMovies() {

    const { isError, isLoading, data } = useQuery('TopRatedMovies', () => API.fetchTopRatedMovies());

    return (
        <View>
            <MoviesList list={data?.data.results} isLodingList={isLoading} hasError={isError} />
        </View>
    )
}
