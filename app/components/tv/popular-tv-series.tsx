import React from 'react'
import {trpc} from "@/trpc/server";
import TvListTemplate from "@/app/components/tv/tv-list-template";

const PopularTvSeries = async () => {
    const popularSeries = await trpc.tv.getTvSeriesList({
        listType:'popular'
    });

    return (
        <TvListTemplate title={'Popular Tv Series'} mediaType={'tv'} tvData={popularSeries.results}/>
    )
}
export default PopularTvSeries
