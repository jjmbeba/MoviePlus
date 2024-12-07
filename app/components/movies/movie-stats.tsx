import React from 'react'
import {Badge} from "@/components/ui/badge";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"
import {movieDetailSchema} from "@/trpc/schemas/movies";
import {z} from "zod";
import {clsx} from "clsx";

type Props = {
    runtime: number;
    genres: z.infer<typeof movieDetailSchema.shape.genres>;
    voteAverage:number;
}

dayjs.extend(duration);

const MovieStats = ({runtime, genres, voteAverage}: Props) => {
    const hours = dayjs.duration(runtime, 'minutes').hours();
    const minutes = dayjs.duration(runtime, 'minutes').minutes();

    return (
        <div className={'flex flex-wrap items-center gap-2 mt-3'}>
            <Badge variant={'outline'} className={clsx('text-xs sm:text-sm', {
                'border-green-500 text-green-500': voteAverage >= 7.5,
                'border-yellow-500 text-yellow-500':voteAverage >= 5 && voteAverage < 7.5,
                'border-orange-500 text-orange-500':voteAverage >= 2.5 && voteAverage < 5,
                'border-red-500 text-red-500':voteAverage >= 0 && voteAverage < 2.5
            })}>
                {voteAverage.toFixed(1)} - TMDB
            </Badge>
            <Badge variant={'outline'} className="text-xs sm:text-sm">
                {generateDurationText(hours, 'hours')} {generateDurationText(minutes, 'minutes')}
            </Badge>
            {genres.map(({id, name}) => (
                <Badge key={id} variant={'outline'} className="text-xs sm:text-sm">
                    {name}
                </Badge>
            ))}
        </div>
    )
}

const generateDurationText = (duration: number, unit: string) => {
    switch (unit) {
        case 'hours':
            return duration > 1 ? `${duration} hours` : '1 hour'

        case 'minutes':
            return duration > 1 ? `${duration} minutes` : '1 minute'
    }
}

export default MovieStats

