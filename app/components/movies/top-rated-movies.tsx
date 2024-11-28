import React from 'react'
import MovieListTemplate from "@/app/components/movies/movie-list-template";
import {trpc} from "@/trpc/server";

const TopRatedMovies = async () => {
    const topRatedMovies = await trpc.movies.getMovieList({
        listType: 'top_rated'
    })

    return (
        <MovieListTemplate title={'Top Rated Movies'} mediaType={'movies'} movieData={topRatedMovies.results}/>
    )
}
export default TopRatedMovies
