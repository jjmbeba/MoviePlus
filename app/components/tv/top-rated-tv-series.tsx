import React from 'react'
import TvListTemplate from "@/app/components/tv/tv-list-template";
import {trpc} from "@/trpc/server";

const TopRatedTvSeries = async () => {
    const topRatedSeries = await trpc.tv.getTvSeriesList({
        listType: "top_rated"
    });

    return (
        <TvListTemplate title={'Top Rated Tv Series'} mediaType={'tv'} tvData={topRatedSeries.results}/>
    )
}
export default TopRatedTvSeries
