import React from 'react'
import BackButton from "@/app/components/back-button";
import {Card, CardContent} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import BookmarkButton from "@/app/components/bookmark-button";

const Page = () => {
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
                            Title
                        </h1>
                        <BookmarkButton/>
                    </div>
                    <div className={'flex items-center gap-5 mt-3'}>
                    {Array.from({length:5}).map((_, index) => (
                            <Badge key={index} variant={'outline'}>
                                lorem
                            </Badge>
                        ))}
                    </div>
                    <p className={'max-w-lg mt-5'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, aspernatur culpa deserunt
                        dicta dolorem doloremque doloribus eaque et eum illo necessitatibus numquam quasi quidem
                        temporibus voluptate! Architecto consectetur culpa dolorem.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Page
