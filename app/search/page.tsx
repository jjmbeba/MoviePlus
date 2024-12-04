import React from 'react'
import {capitalize} from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import MovieListTemplate from "@/app/components/movies/movie-list-template";
import {trpc} from "@/trpc/server";
import TvListTemplate from "@/app/components/tv/tv-list-template";

type Props = {
    searchParams: Promise<{ search_query: string; }>
}

const Page = async ({searchParams}: Props) => {
    const query = (await searchParams).search_query;
    const searchedMovies = await trpc.search.searchMovies({
        searchQuery: query
    });

    const searchedTv = await trpc.search.searchTv({
        searchQuery: query
    });

    return (
        <div className={'mt-10'}>
            <h1 className="text-2xl font-semibold leading-tight text-gray-700 flex items-center">
                Search Results for: <AnimatedShinyText
                className={'capitalize mx-3'}>{capitalize(query)}</AnimatedShinyText>
            </h1>
            <MovieListTemplate title={'Movies'} mediaType={'movie'} movieData={searchedMovies.results}/>
            <TvListTemplate title={'Tv Series'} mediaType={'tv'} tvData={searchedTv.results}/>
        </div>
    )
}
export default Page
