import * as React from 'react';
import MovieDetails from '../../components/MovieDetails'

export default function index(props: any) {

    const fullMovieData = props.route.params.data.data;

    return (
        <MovieDetails fullMovieData={fullMovieData} />
    )
}
