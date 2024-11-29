import {z} from "zod";

export const createReviewSchema = z.object({
    title: z.string().min(2).max(50),
    rating: z.string().transform((rating) => parseInt(rating)),
    body: z.string().min(2, {
        message: "Body must be at least 2 characters"
    }),
    recordId: z.number(),
    mediaType: z.string(),
});

export const createReviewSchemaWithUser = createReviewSchema.merge(
    z.object({
        userId:z.string()
    })
)