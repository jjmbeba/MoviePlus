import {SignIn} from '@clerk/nextjs'
import BackButton from "@/app/components/back-button";

export default function Page() {
    return <div className={'h-screen flex flex-col items-center justify-center'}>
        <div>
            <div className={'mb-4 flex justify-start w-full'}>
                <BackButton/>
            </div>
            <SignIn/>
        </div>
    </div>
}