import React from 'react'
import {z} from "zod";
import {seriesDetailSchema} from "@/trpc/schemas/tv";
import {Badge} from "@/components/ui/badge";

type Props = {
    genres: z.infer <typeof seriesDetailSchema.shape.genres>;
    numberOfSeasons:number;
    numberOfEpisodes:number;
}

const SeriesStats = ({genres, numberOfSeasons, numberOfEpisodes}:Props) => {
    return (
        <div className={'flex items-center gap-2 mt-3'}>
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
