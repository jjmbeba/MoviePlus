import React from 'react'
import MovieListTemplate from "@/app/components/movies/movie-list-template";

const PopularMovies = () => {
    return (
        <MovieListTemplate title={'Popular Movies'} movieType={'movies'} movieData={Array.from({length: 10})}/>
    )
}
export default PopularMovies
