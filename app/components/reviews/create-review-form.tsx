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

const createReviewSchema = z.object({
    title:z.string().min(2, {
        message:"Title must be at least 2 characters"
    }),
    body:z.string().min(2, {
        message:"Review body must be at least 2 characters"
    }),
    rating:z.number(),
    recordId:z.number(),
    mediaType:z.enum(['movie','tv'])
});

const CreateReviewForm = () => {
    const form = useForm<z.infer<typeof createReviewSchema>>({
        resolver:zodResolver(createReviewSchema),
        defaultValues:{
            "rating":3
        }
    });

    function onSubmit(values: z.infer<typeof createReviewSchema>){
        console.log(values);
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
                                   render={({ field }) => (
                                       <FormItem>
                                           <FormLabel>Title</FormLabel>
                                           <FormControl>
                                               <Input placeholder="GOATED Movie " {...field} />
                                           </FormControl>
                                           <FormMessage />
                                       </FormItem>
                                   )}
                               />
                               <FormField
                                   control={form.control}
                                   name="rating"
                                   render={({ field }) => (
                                       <FormItem>
                                           <FormLabel>Rating</FormLabel>
                                           <FormControl>
                                               <Input placeholder="shadcn" {...field} />
                                           </FormControl>
                                           <FormMessage />
                                       </FormItem>
                                   )}
                               />
                           </div>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
export default CreateReviewForm
