import React from 'react'
import {Badge} from "@/components/ui/badge";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration"

type Props = {
    runtime: number;
}

dayjs.extend(duration);


const MovieStats = ({runtime}: Props) => {
    const hours = dayjs.duration(runtime, 'minutes').hours();
    const minutes = dayjs.duration(runtime, 'minutes').minutes();

    return (
        <div className={'flex items-center gap-5 mt-3'}>
            <Badge variant={'outline'}>
                {generateDurationText(hours, 'hours')} {generateDurationText(minutes, 'minutes')}
            </Badge>
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
