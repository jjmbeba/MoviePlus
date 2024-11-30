import {baseProcedure, createTRPCRouter} from "@/trpc/init";
import {z} from "zod";
import {prisma} from "@/prisma/client";

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
    editReview: baseProcedure.input(
        z.object({
            id: z.number(),
            title: z.string().min(2).max(50),
            rating: z.number(),
            body: z.string().min(2, {
                message: "Body must be at least 2 characters"
            }),
            userId: z.string()
        })
    ).mutation(async ({input}) => {
        const {id, title, rating, body, userId} = input;

        const updatedReview = await prisma.review.update({
            where: {
                id,
                userId
            },
            data: {
                title,
                rating,
                body
            }
        })

        return {
            message: "Review edited successfully",
            updatedReview
        }
    }),
    deleteReview: baseProcedure.input(
        z.object({
            userId: z.string(),
            reviewId: z.number()
        })
    ).mutation(async ({input}) => {
        await prisma.review.delete({
            where: {
                id: input.reviewId,
                userId: input.userId
            }
        });

        return {
            message: "Review deleted successfully"
        }
    })
});

export type ReviewsRouter = typeof reviewsRouter;