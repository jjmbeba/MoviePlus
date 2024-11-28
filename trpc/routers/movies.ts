import {z} from 'zod';
import {baseProcedure, createTRPCRouter} from '../init';
import {movieDetailSchema, movieListSchema, recommendationsSchema} from "@/trpc/schemas/movies";
import {FETCH_OPTIONS} from "@/trpc/routers/constants";

export const moviesRouter = createTRPCRouter({
    getMovieList: baseProcedure.input(
        z.object({listType: z.enum(['popular', 'top_rated', 'now_playing', 'upcoming'])})
    ).query(async ({input}) => {
        const res = await fetch(`${process.env.TMDB_BASE_URL}/movie/${input.listType}?language=en-US&page=1`, {...FETCH_OPTIONS}).then((res) => res.json()).catch((err) => console.error(err));

        return movieListSchema.parse(res);
    }),
    getMovieById: baseProcedure.input(
        z.object({
            id: z.number()
        })
    ).query(async ({input}) => {
        const res = await fetch(`${process.env.TMDB_BASE_URL}/movie/${input.id}`, {
            ...FETCH_OPTIONS
        }).then((res) => res.json()).catch((err) => console.error(err));

        return movieDetailSchema.parse(res);
    }),
    getRecommendationsById: baseProcedure.input(
        z.object({
            id: z.number()
        })
    ).query(async ({input}) => {
        const res = await fetch(`${process.env.TMDB_BASE_URL}/movie/${input.id}/recommendations?language=en-US&page=1`, {
            ...FETCH_OPTIONS
        }).then((res) => res.json()).catch((err) => console.error(err));

        return recommendationsSchema.parse(res);
    })
});
// export type definition of API
export type MovieRouter = typeof moviesRouter;