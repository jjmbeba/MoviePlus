import React from 'react'
import MovieListTemplate from "@/app/components/movies/movie-list-template";
import {trpc} from "@/trpc/server";

const PopularMovies = async () => {
    const popularMovies = await trpc.movies.getMovieList({
        listType:'popular'
    });

    return (
        <MovieListTemplate title={'Popular Movies'} mediaType={'movie'} movieData={popularMovies.results}/>
    )
}
export default PopularMovies
