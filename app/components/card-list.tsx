import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {
    title:string;
    children:React.ReactNode
}

const CardList = ({title, children}:Props) => {
    return (
        <div className={'mt-10'}>
            <h2 className={'font-bold text-2xl'}>
                {title}
            </h2>
            <div className={'mt-8'}>
                {children}
            </div>
        </div>
    )
}
export default CardList
