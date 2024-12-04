import {baseProcedure, createTRPCRouter} from "@/trpc/init";
import {z} from "zod";
import {FETCH_OPTIONS} from "@/trpc/routers/constants";
import {searchMovieSchema, searchTvSchema} from "@/trpc/schemas/search";

export const searchRouter = createTRPCRouter({
    searchMovies:baseProcedure.input(
        z.object({
            searchQuery:z.string()
        })
    ).query(async({input}) => {
        const res = await fetch(`${process.env.TMDB_BASE_URL}/search/movie?query=${input.searchQuery}&include_adult=false&language=en-US`, {
            ...FETCH_OPTIONS
        }).then((res) => res.json()).catch((err) => console.error(err))

        return searchMovieSchema.parse(res);
    }),
    searchTv:baseProcedure.input(
        z.object({
            searchQuery:z.string()
        })
    ).query(async({input}) => {
        const res = await fetch(`${process.env.TMDB_BASE_URL}/search/tv?query=${input.searchQuery}&include_adult=false&language=en-US`, {
            ...FETCH_OPTIONS
        }).then((res) => res.json()).catch((err) => console.error(err));

        return searchTvSchema.parse(res);
    })
})

export type SearchRouter = typeof searchRouter;