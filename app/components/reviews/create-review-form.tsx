"use client";

import React from 'react'
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import AddReviewButton from "@/app/components/reviews/add-review-button";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {useUser} from "@clerk/nextjs";
import {createReviewSchema} from "@/trpc/schemas/reviews";
import {trpc} from "@/trpc/client";
import {toast} from 'sonner';
import { Loader } from 'lucide-react';
import {useRouter} from "next/navigation";

type Props = {
    recordId: number;
    mediaType: string;
}

const CreateReviewForm = ({recordId, mediaType}: Props) => {
    const router = useRouter();
    const {mutate: addReview, isPending} = trpc.reviews.addReview.useMutation({
        onSuccess: ({message}) => {
            toast.success(message);
            router.refresh()
        }
    });
    const form = useForm<z.infer<typeof createReviewSchema>>({
        resolver: zodResolver(createReviewSchema),
        defaultValues: {
            title: "",
            rating: 1,
            body: "",
            recordId,
            mediaType,
        },
    });

    const {user} = useUser();
    if (!user?.id) return;

    function onSubmit(values: z.infer<typeof createReviewSchema>) {
        if (!user?.id || !user.fullName) return;
        addReview({
            ...values,
            userId: user.id,
            userName: user.fullName
        })
    }

    return (
        <Dialog>
            <DialogTrigger>
                <AddReviewButton/>
            </DialogTrigger>
            <DialogContent className={'max-w-[90vw] sm:max-w-xl'}>
                <DialogHeader>
                    <DialogTitle className="text-lg sm:text-xl mb-4">
                        Create new review
                    </DialogTitle>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
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
                                Create
                            </Button>
                        </form>
                    </Form>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
export default CreateReviewForm

