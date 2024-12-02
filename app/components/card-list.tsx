import React from 'react'

type Props = {
    title:string;
    children:React.ReactNode;
}

const CardList = ({title, children}:Props) => {
    return (
        <div className={'mt-10'}>
            <div className={'flex items-center justify-between'}>
                <h2 className={'font-bold text-2xl'}>
                    {title}
                </h2>
            </div>
            <div className={'mt-8'}>
                {children}
            </div>
        </div>
    )
}
export default CardList
