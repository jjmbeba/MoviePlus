import React from 'react'
import BackButton from "@/app/components/back-button";
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

    if (!movie) return null;

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

    const imageUrl = !poster_path ? 'https://placehold.co/400' : generateImageUrl(poster_path);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <BackButton />
            </div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-center md:gap-8 lg:gap-16">
                <div className="w-full md:w-1/3 lg:w-1/4 mb-6 md:mb-0">
                    <Image
                        className="rounded-xl w-full h-auto"
                        width={327}
                        height={412}
                        src={imageUrl}
                        alt={title}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                </div>
                <div className="w-full md:w-2/3 lg:w-3/4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                            {title}
                        </h1>
                        {userId && (
                            <BookmarkButton
                                title={title}
                                mediaType="movie"
                                recordId={id}
                                backdropPath={backdrop_path ?? ''}
                                posterPath={poster_path ?? ''}
                            />
                        )}
                    </div>
                    <MovieStats runtime={runtime} genres={genres} voteAverage={vote_average} />
                    <p className="mt-4 text-sm md:text-base">
                        {overview}
                    </p>
                </div>
            </div>
            <div className="mt-8">
                <ReviewsList recordId={id} mediaType="movie" />
            </div>
            {belongs_to_collection && (
                <div className="mt-8">
                    <Collections
                        name={belongs_to_collection.name}
                        collectionId={belongs_to_collection.id}
                    />
                </div>
            )}
            <div className="mt-8">
                <Recommendations mediaType="movie" recordId={id} />
            </div>
        </div>
    )
}

export default Page

