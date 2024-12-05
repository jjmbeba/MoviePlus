import React from 'react'
import BackButton from "@/app/components/back-button";
import {Card, CardContent} from "@/components/ui/card";
import BookmarkButton from "@/app/components/bookmark-button";
import {trpc} from "@/trpc/server";
import MovieStats from "@/app/components/movies/movie-stats";
import Collections from "@/app/components/collections";
import Recommendations from "@/app/components/recommendations";
import ReviewsList from "@/app/components/reviews/reviews-list";
import {auth} from "@clerk/nextjs/server";
import Image from "next/image";
import {generateImageUrl} from "@/lib/utils";

type Props = {
    params: Promise<{ slug: string; id: string; }>
}

const Page = async ({params}: Props) => {
    const {userId} = await auth()

    const movie = await trpc.movies.getMovieById({
        id: parseInt((await params).id)
    });

    //Create a fallback page
    if (!movie) return;

    const {
        title,
        overview,
        runtime,
        genres,
        vote_average,
        id,
        belongs_to_collection,
        backdrop_path,
        poster_path
    } = movie;

    const imageUrl = poster_path === '' ? 'https://placehold.co/400' : generateImageUrl(poster_path);

    return (
        <div className={'mt-10'}>
            <BackButton/>
            <div className={'flex items-start justify-center gap-28 mt-8'}>
                <Image className={'rounded-xl'} width={327} height={412} src={imageUrl} alt={title}/>
                <div>
                    <div className={'flex items-center justify-between'}>
                        <h1 className={'text-2xl'}>
                            {title}
                        </h1>
                        {userId &&
                            <BookmarkButton title={title} mediaType={'movie'} recordId={id} backdropPath={backdrop_path}
                                            posterPath={poster_path}/>}
                    </div>
                    <MovieStats runtime={runtime} genres={genres} voteAverage={vote_average}/>
                    <p className={'max-w-lg mt-5'}>
                        {overview}
                    </p>
                </div>
            </div>
            <ReviewsList recordId={id} mediaType={'movie'}/>
            {belongs_to_collection &&
                (<Collections
                    name={belongs_to_collection.name}
                    collectionId={belongs_to_collection.id}
                />)}
            <Recommendations mediaType={'movie'} recordId={id}/>
        </div>
    )
}
export default Page
