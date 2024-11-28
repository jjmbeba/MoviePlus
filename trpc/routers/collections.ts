import {z} from 'zod';
import {baseProcedure, createTRPCRouter} from '../init';
import {collectionDetailSchema} from "@/trpc/schemas/movies";
import {FETCH_OPTIONS} from "@/trpc/routers/constants";

export const collectionsRouter = createTRPCRouter({
    getCollectionById: baseProcedure.input(
        z.object({
            id: z.number()
        })
    ).query(async ({input}) => {
        const res = await fetch(`${process.env.TMDB_BASE_URL}/collection/${input.id}?language=en-US`, {
            ...FETCH_OPTIONS
        }).then((res) => res.json()).catch((err) => console.error(err));

        return collectionDetailSchema.parse(res);
    }),
});

export type CollectionsRouter = typeof collectionsRouter;