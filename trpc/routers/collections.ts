import {z} from 'zod';
import {baseProcedure, createTRPCRouter} from '../init';
import {collectionDetailSchema} from "@/trpc/schemas";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`
    }
};

export const collectionsRouter = createTRPCRouter({
    getCollectionById: baseProcedure.input(
        z.object({
            id: z.number()
        })
    ).query(async ({input}) => {
        const res = await fetch(`${process.env.TMDB_BASE_URL}/collection/${input.id}?language=en-US`, {
            ...options
        }).then((res) => res.json()).catch((err) => console.error(err));

        return collectionDetailSchema.parse(res);
    }),
});

export type CollectionsRouter = typeof collectionsRouter;