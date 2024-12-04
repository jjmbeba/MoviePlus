import React from 'react'
import {capitalize} from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

type Props = {
    searchParams: Promise<{ search_query: string; }>
}

const Page = async ({searchParams}:Props) => {
    const query = (await searchParams).search_query;

    return (
        <div className={'mt-10'}>
            <h1 className="text-2xl font-semibold leading-tight text-gray-700 flex items-center">
                Search Results for: <AnimatedShinyText className={'capitalize mx-3'}>{capitalize(query)}</AnimatedShinyText>
            </h1>
        </div>
    )
}
export default Page
