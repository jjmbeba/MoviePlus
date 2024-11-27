import {z} from "zod";

export const movieListSchema = z.object({
    page: z.number(),
    results: z.object({
        adult: z.boolean(),
        backdrop_path: z.string(),
        genre_ids: z.number().array(),
        id: z.number(),
        original_title: z.string(),
        overview: z.string(),
        popularity: z.number(),
        poster_path: z.string(),
        release_date: z.string(),
        title: z.string(),
        video: z.boolean(),
        vote_average: z.number(),
        vote_count: z.number()
    }).array(),
    total_pages: z.number(),
    total_results: z.number()
});