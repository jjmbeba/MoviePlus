import {baseProcedure, createTRPCRouter} from "@/trpc/init";
import {FETCH_OPTIONS} from "@/trpc/routers/constants";
import {tvListSchema} from "@/trpc/schemas/tv";
import {z} from "zod";
import {seriesDetailSchema} from "@/trpc/schemas/tv";
import {recommendationsSchema} from "@/trpc/schemas/tv";

export const tvRouter = createTRPCRouter({
    getTvSeriesList: baseProcedure.input(
        z.object({
            listType: z.enum(['popular', 'top_rated', 'airing_today', 'on_the_air'])
        })
    ).query(async ({input}) => {
        const res = await fetch(`${process.env.TMDB_BASE_URL}/tv/${input.listType}?language=en-US&page=1`, {
            ...FETCH_OPTIONS
        }).then((res) => res.json()).catch((err) => console.error(err));

        return tvListSchema.parse(res);
    }),
    getTvSeriesById:baseProcedure.input(
        z.object({
            id: z.number()
        })
    ).query(async ({input}) => {
        const res = await fetch(`${process.env.TMDB_BASE_URL}/tv/${input.id}?language=en-US`, {
            ...FETCH_OPTIONS
        }).then((res) => res.json()).catch((err) => console.error(err));

        return seriesDetailSchema.parse(res);
    }),
    getRecommendationsById: baseProcedure.input(
        z.object({
            id: z.number()
        })
    ).query(async ({input}) => {
        const res = await fetch(`${process.env.TMDB_BASE_URL}/tv/${input.id}/recommendations?language=en-US&page=1`, {
            ...FETCH_OPTIONS
        }).then((res) => res.json()).catch((err) => console.error(err));

        return recommendationsSchema.parse(res);
    })
});

export type TvRouter = typeof tvRouter;