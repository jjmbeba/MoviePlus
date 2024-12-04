import React from 'react'
import BackButton from "@/app/components/back-button";
import {Card, CardContent} from "@/components/ui/card";
import BookmarkButton from "@/app/components/bookmark-button";
import {trpc} from "@/trpc/server";
import Recommendations from "@/app/components/recommendations";
import ReviewsList from "@/app/components/reviews/reviews-list";
import SeriesStats from "@/app/components/tv/series-stats";
import {auth} from "@clerk/nextjs/server";

type Props = {
    params: Promise<{ slug: string; id: string; }>
}

const Page = async ({params}: Props) => {
    const {userId} = await auth()

    const series = await trpc.tv.getTvSeriesById({
        id: parseInt((await params).id)
    });

    if(!series) return;

    const {name, overview, id, vote_average, number_of_seasons, number_of_episodes, genres, poster_path, backdrop_path} = series;

    return (
        <div className={'mt-10'}>
            <BackButton/>
            <div className={'flex items-start gap-16 mt-8'}>
                <Card className={'relative w-1/2 h-[60vh] flex items-center justify-center'}>
                    <CardContent className="flex aspect-square items-center justify-center w-1/3">
                        Image
                    </CardContent>
                </Card>
                <div>
                    <div className={'flex items-center justify-between'}>
                        <h1 className={'text-2xl'}>
                            {name}
                        </h1>
                        {userId && <BookmarkButton title={name} mediaType={'tv'} recordId={id} posterPath={poster_path}
                                         backdropPath={backdrop_path}/>}
                    </div>
                    <SeriesStats voteAverage={vote_average} numberOfSeasons={number_of_seasons} numberOfEpisodes={number_of_episodes} genres={genres} />
                    <p className={'max-w-lg mt-5'}>
                        {overview}
                    </p>
                </div>
            </div>
            <ReviewsList recordId={id} mediaType={'tv'} />
            <Recommendations mediaType={'tv'} recordId={id}/>
        </div>
    )
}
export default Page
