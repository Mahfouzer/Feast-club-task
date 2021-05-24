import React from 'react'
import { View } from 'react-native'
import { useQuery } from 'react-query';
import API from '../../../api';
import MoviesList from '../../../components/MoviesList'

export default function UpComingMovies() {



    const { isError, isLoading, data, refetch } = useQuery('UpComingMovies', () => API.fetchUpcomingMovies());

    return (
        <View>
            <MoviesList list={data?.data.results} isLodingList={isLoading} hasError={isError} />
        </View>
    )
}
