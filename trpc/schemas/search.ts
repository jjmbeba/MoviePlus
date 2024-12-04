import { z } from "zod";

// Define the Result schema
export const resultMovieSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    genre_ids: z.array(z.number()),
    id: z.number(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    release_date: z.string(), // Assuming this is an ISO date string
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
});

// Define the SearchMovie schema
export const searchMovieSchema = z.object({
    page: z.number(),
    results: z.array(resultMovieSchema),
    total_pages: z.number(),
    total_results: z.number(),
});

// Define the Result schema
export const tvResultSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    genre_ids: z.array(z.number()),
    id: z.number(),
    origin_country: z.array(z.string()),
    original_language: z.string(),
    original_name: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    first_air_date: z.string(), // Assuming this is an ISO date string
    name: z.string(),
    vote_average: z.number(),
    vote_count: z.number(),
});

// Define the SearchTv schema
export const searchTvSchema = z.object({
    page: z.number(),
    results: z.array(tvResultSchema),
    total_pages: z.number(),
    total_results: z.number(),
});