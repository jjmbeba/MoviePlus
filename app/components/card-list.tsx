import React from 'react'

type Props = {
    title: string;
    children: React.ReactNode;
}

const CardList = ({ title, children }: Props) => {
    return (
        <div className="mt-6 sm:mt-8 md:mt-10">
            <div className="flex items-center justify-between px-4">
                <h2 className="font-bold text-xl sm:text-2xl">
                    {title}
                </h2>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8">
                {children}
            </div>
        </div>
    )
}

export default CardList

