import React from 'react'
import BackButton from "@/app/components/back-button";
import {Card, CardContent} from "@/components/ui/card";
import BookmarkButton from "@/app/components/bookmark-button";
import {trpc} from "@/trpc/server";
import Recommendations from "@/app/components/recommendations";
import ReviewsList from "@/app/components/reviews/reviews-list";
import SeriesStats from "@/app/components/tv/series-stats";

type Props = {
    params: Promise<{ slug: string; id: string; }>
}

const Page = async ({params}: Props) => {
    const series = await trpc.tv.getTvSeriesById({
        id: parseInt((await params).id)
    });

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
                            {series.name}
                        </h1>
                        <BookmarkButton/>
                    </div>
                    <SeriesStats voteAverage={series.vote_average} numberOfSeasons={series.number_of_seasons} numberOfEpisodes={series.number_of_episodes} genres={series.genres} />
                    <p className={'max-w-lg mt-5'}>
                        {series.overview}
                    </p>
                </div>
            </div>
            <ReviewsList/>
            <Recommendations mediaType={'tv'} recordId={series.id}/>
        </div>
    )
}
export default Page
