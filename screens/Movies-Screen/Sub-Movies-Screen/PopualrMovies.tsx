import React from 'react'
import { View, Text } from 'react-native'
import { useQuery } from 'react-query';
import API from '../../../api';
import MoviesList from '../../../components/MoviesList'

export default function PopualrMovies() {

    const { isError, isLoading, data, refetch } = useQuery('PopualrMovies', () => API.fetchPopularMovies());

    return (
        <View>
            <MoviesList list={data?.data.results} isLodingList={isLoading} hasError={isError} />
        </View>
    )
}
