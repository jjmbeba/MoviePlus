import React from 'react'
import {AlertDialogAction} from "@/components/ui/alert-dialog";
import {useAuth} from "@clerk/nextjs";
import {trpc} from "@/trpc/client";
import {toast} from "sonner";
import {useRouter} from "next/navigation";

type Props = {
    reviewId: number;
}

const DeleteReviewForm = ({reviewId}: Props) => {
    const {userId} = useAuth();
    const router = useRouter()
    const {mutate: deleteReview} = trpc.reviews.deleteReview.useMutation({
        onSuccess: ({message}) => {
            toast.success(message);
            router.refresh()
        }
    });

    if (!userId) return;

    return (
        <AlertDialogAction onClick={() => deleteReview({
            reviewId,
            userId
        })} className={'bg-red-500 text-white'}>Continue</AlertDialogAction>
    )
}
export default DeleteReviewForm
