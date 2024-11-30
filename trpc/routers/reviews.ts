import {baseProcedure, createTRPCRouter} from "@/trpc/init";
import {z} from "zod";
import {prisma} from "@/prisma/client";
import {editReviewSchema} from "@/trpc/schemas/reviews";

export const reviewsRouter = createTRPCRouter({
    addReview: baseProcedure.input(
        z.object({
            title: z.string().min(2).max(50),
            rating: z.number(),
            body: z.string().min(2, {
                message: "Body must be at least 2 characters"
            }),
            recordId: z.number(),
            mediaType: z.string(),
            userId: z.string(),
            userName: z.string()
        })
    ).mutation(async ({input}) => {
        const newReview = await prisma.review.create({
            data: {...input}
        });
        return {
            message: "Review added successfully",
            createdReview: newReview
        }
    }),
    getReviewsByRecordId: baseProcedure.input(
        z.object({
            mediaType: z.string(),
            recordId: z.number()
        })
    ).query(({input}) => {
        return prisma.review.findMany({
            where: {
                AND: {
                    recordId: input.recordId,
                    mediaType: input.mediaType
                }
            }
        });
    }),
    editReview:baseProcedure.input(
        z.object({
            id:z.number(),
            title: z.string().min(2).max(50),
            rating: z.number(),
            body: z.string().min(2, {
                message: "Body must be at least 2 characters"
            }),
        })
    ).mutation(({input}) => {
        console.log(input)

        return {
            message:"Review edited successfully"
        }
    })
});

export type ReviewsRouter = typeof reviewsRouter;