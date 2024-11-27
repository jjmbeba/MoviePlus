"use client";

import React from 'react'
import {Button} from "@/components/ui/button";
import {ChevronLeft} from "lucide-react";
import {useRouter} from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    return (
        <Button onClick={() => router.back()} variant={'ghost'} size={'icon'}>
            <ChevronLeft/>
        </Button>
    )
}
export default BackButton
