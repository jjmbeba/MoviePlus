import React from 'react'
import {z} from "zod";
import {seriesDetailSchema} from "@/trpc/schemas/tv";
import {Badge} from "@/components/ui/badge";
import {clsx} from "clsx";

type Props = {
    genres: z.infer <typeof seriesDetailSchema.shape.genres>;
    numberOfSeasons:number;
    numberOfEpisodes:number;
    voteAverage:number;
}

const SeriesStats = ({voteAverage, genres, numberOfSeasons, numberOfEpisodes}:Props) => {
    return (
        <div className={'flex items-center flex-wrap gap-2 mt-3'}>
            <Badge variant={'outline'} className={clsx({
                'border-green-500 text-green-500': voteAverage >= 7.5,
                'border-yellow-500 text-yellow-500':voteAverage >= 5 && voteAverage < 7.5,
                'border-orange-500 text-orange-500':voteAverage >= 2.5 && voteAverage < 5,
                'border-red-500 text-red-500':voteAverage >= 0 && voteAverage < 2.5
            })}>
                {voteAverage.toFixed(1)}
            </Badge>
            <Badge variant={'outline'}>
                {numberOfSeasons > 1 ? `${numberOfSeasons} seasons` : '1 season'}
            </Badge>
            <Badge variant={'outline'}>
                {numberOfEpisodes > 1 ? `${numberOfEpisodes} episodes` : '1 episode'}
            </Badge>
            {genres.map(({id, name}) => (
                <Badge key={id} variant={'outline'}>
                    {name}
                </Badge>
            ))}
        </div>
    )
}
export default SeriesStats
