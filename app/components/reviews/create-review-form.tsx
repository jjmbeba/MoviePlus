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
import {useAuth} from "@clerk/nextjs";

const createEventSchema = z.object({
    title: z.string().min(2).max(50),
    rating: z.string().transform((rating) => parseInt(rating)),
    body: z.string().min(2, {
        message: "Body must be at least 2 characters"
    }),
    recordId: z.number(),
    mediaType: z.string(),
})

type Props = {
    recordId: number;
    mediaType: string;
}

const CreateReviewForm = ({recordId, mediaType}: Props) => {
    const form = useForm<z.infer<typeof createEventSchema>>({
        resolver: zodResolver(createEventSchema),
        defaultValues: {
            title: "",
            rating: 1,
            body: "",
            recordId,
            mediaType,
        },
    });

    const {userId} = useAuth();
    if (!userId) return;

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof createEventSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log({
            ...values,
            userId
        })
    }

    return (
        <Dialog>
            <DialogTrigger>
                <AddReviewButton/>
            </DialogTrigger>
            <DialogContent className={'max-w-xl'}>
                <DialogHeader>
                    <DialogTitle>
                        Create new review
                    </DialogTitle>
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
                            <Button type="submit">
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
