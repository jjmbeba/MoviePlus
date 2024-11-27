import React from 'react'
import MovieListTemplate from "@/app/components/movies/movie-list-template";

const TopRatedMovies = () => {
    return (
        <MovieListTemplate title={'Top Rated Movies'} movieType={'movies'} movieData={Array.from({length:10})}/>
    )
}
export default TopRatedMovies
