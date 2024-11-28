import React from 'react'
import {Badge} from "@/components/ui/badge";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"
import {movieDetailSchema} from "@/trpc/schemas";
import {z} from "zod";

type Props = {
    runtime: number;
    genres: z.infer<typeof movieDetailSchema.shape.genres>
}

dayjs.extend(duration);


const MovieStats = ({runtime, genres}: Props) => {
    const hours = dayjs.duration(runtime, 'minutes').hours();
    const minutes = dayjs.duration(runtime, 'minutes').minutes();

    return (
        <div className={'flex items-center gap-2 mt-3'}>
            <Badge variant={'outline'}>
                {generateDurationText(hours, 'hours')} {generateDurationText(minutes, 'minutes')}
            </Badge>
            {genres.map(({id, name}) => (
                <Badge key={id} variant={'outline'}>
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
