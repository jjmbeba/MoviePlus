import React from 'react'
import BackButton from "@/app/components/back-button";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import BookmarkButton from "@/app/components/bookmark-button";
import {trpc} from "@/trpc/server";
import MovieStats from "@/app/components/movie-stats";

type Props = {
    params: Promise<{ slug: string; id: string; }>
}

const Page = async ({params}: Props) => {
    const movie = await trpc.movies.getMovieById({
        id: parseInt((await params).id)
    });

    //Create a fallback page
    if (!movie) return;

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
                            {movie.title}
                        </h1>
                        <BookmarkButton/>
                    </div>
                    <MovieStats runtime={movie.runtime} />
                    <p className={'max-w-lg mt-5'}>
                        {movie.overview}
                    </p>
                </div>
            </div>
            {/*<Recommendations/>*/}
            {/*<Collections/>*/}
        </div>
    )
}
export default Page
