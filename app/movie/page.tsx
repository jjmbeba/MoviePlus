import React from 'react'
import PopularMovies from "@/app/components/movies/popular-movies";
import TopRatedMovies from "@/app/components/movies/top-rated-movies";

const Page = () => {
    return (
        <div>
            <PopularMovies/>
            <TopRatedMovies/>
        </div>
    )
}
export default Page
