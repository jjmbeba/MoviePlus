"use client";

import React from 'react'
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {editReviewSchema} from "@/trpc/schemas/reviews";
import {RouterOutputs} from "@/trpc/routers/_app";
import {trpc} from "@/trpc/client";
import {toast} from "sonner";
import {Button} from "@/components/ui/button";
import { Loader } from 'lucide-react';
import {useAuth} from "@clerk/nextjs";
import {useRouter} from "next/navigation";

type Props = {
    review: RouterOutputs['reviews']['getReviewsByRecordId'][number],
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EditReviewForm = ({review, setOpen}: Props) => {
    const router = useRouter();
    const {mutate: editReview, isPending} = trpc.reviews.editReview.useMutation({
        onSuccess: ({message}) => {
            toast.success(message);
            setOpen(false);
            router.refresh();
        }
    });
    const form = useForm<z.infer<typeof editReviewSchema>>({
        resolver: zodResolver(editReviewSchema),
        defaultValues: {
            title: review.title,
            rating: review.rating.toString(),
            body: review.body,
            id: review.id
        },
    });

    const {userId} = useAuth();

    function onSubmit(values: z.infer<typeof editReviewSchema>) {
        if (!userId) return;

        editReview({
            ...values,
            userId,
            rating: parseInt(values.rating)
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                <div className={'flex flex-col sm:flex-row sm:items-center sm:gap-4'}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({field}) => (
                            <FormItem className="w-full sm:w-1/2">
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Review Title goes here..." {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="rating"
                        render={({field}) => (
                            <FormItem className="w-full sm:w-1/2 mt-4 sm:mt-0">
                                <FormLabel>Rating</FormLabel>
                                <Select onValueChange={field.onChange}
                                        defaultValue={field.value.toString()}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a rating"/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {Array.from({length: 5}).map((_, index) => (
                                            <SelectItem key={`select-${index}`}
                                                        value={(index + 1).toString()}>
                                                {index + 1}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="body"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Body</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us a little bit about yourself"
                                    className="resize-none h-32 sm:h-40"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button disabled={isPending} type="submit" className="w-full sm:w-auto">
                    {isPending && <Loader className={'animate-spin mr-2'}/>}
                    Update
                </Button>
            </form>
        </Form>
    )
}
export default EditReviewForm

