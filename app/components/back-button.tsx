"use client";

import React from 'react'
import {Button} from "@/components/ui/button";
import { ChevronLeft } from 'lucide-react';
import {useRouter} from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    return (
        <Button onClick={() => router.back()} variant={'ghost'} size={'icon'} className="w-8 h-8 sm:w-10 sm:h-10">
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5"/>
        </Button>
    )
}
export default BackButton

