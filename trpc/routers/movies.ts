import {z} from 'zod';
import {baseProcedure, createTRPCRouter} from '../init';
import {movieListSchema} from "@/trpc/schemas";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.TMDB_BEARER_TOKEN}`
    }
};

export const moviesRouter = createTRPCRouter({
    getMovieList: baseProcedure.input(
        z.object({listType: z.enum(['popular', 'top_rated','now_playing','upcoming'])})
    ).query(async ({input}) => {
        const res = await fetch(`${process.env.TMDB_BASE_URL}/movie/${input.listType}?language=en-US&page=1`, options).then((res) => res.json()).catch((err) => console.error(err));

        return movieListSchema.parse(res);
    })
});
// export type definition of API
export type MovieRouter = typeof moviesRouter;