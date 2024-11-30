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
import {Loader} from "lucide-react";

type Props = {
    review: RouterOutputs['reviews']['getReviewsByRecordId'][number]
}

const EditReviewForm = ({review}: Props) => {
    const {mutate: addReview, isPending} = trpc.reviews.addReview.useMutation({
        onSuccess:({message}) => {
            toast.success(message);
        }
    });
    const form = useForm<z.infer<typeof editReviewSchema>>({
        resolver: zodResolver(editReviewSchema),
        defaultValues: {
            title: review.title,
            rating: review.rating,
            body: review.body,
        },
    });


    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof editReviewSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className={'flex items-center *:w-1/2 gap-4'}>
                    <FormField
                        control={form.control}
                        name="title"
                        render={({field}) => (
                            <FormItem>
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
                            <FormItem>
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
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button disabled={isPending} type="submit">
                    {isPending && <Loader className={'animate-spin'}/>}
                    Update
                </Button>
            </form>
        </Form>
    )
}
export default EditReviewForm
