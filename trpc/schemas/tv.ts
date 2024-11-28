import { z } from 'zod';

// Schema for CreatedBy
export const CreatedBySchema = z.object({
    id: z.number(),
    credit_id: z.string(),
    name: z.string(),
    original_name: z.string(),
    gender: z.number(),
    profile_path: z.string(),
});

// Schema for Genre
export const GenreSchema = z.object({
    id: z.number(),
    name: z.string(),
});

// Schema for LastEpisodeToAir
export const LastEpisodeToAirSchema = z.object({
    id: z.number(),
    name: z.string(),
    overview: z.string(),
    vote_average: z.number(),
    vote_count: z.number(),
    air_date: z.string().nullable(),
    episode_number: z.number(),
    episode_type: z.string(),
    production_code: z.string(),
    runtime: z.number(),
    season_number: z.number(),
    show_id: z.number(),
    still_path: z.string(),
});

// Schema for Network
export const NetworkSchema = z.object({
    id: z.number(),
    logo_path: z.string().nullable(), // Allow null or string
    name: z.string(),
    origin_country: z.string(),
});

// Schema for ProductionCountry
export const ProductionCountrySchema = z.object({
    iso_3166_1: z.string(),
    name: z.string(),
});

// Schema for Season
export const SeasonSchema = z.object({
    air_date: z.string().nullable(),
    episode_count: z.number(),
    id: z.number(),
    name: z.string(),
    overview: z.string(),
    poster_path: z.string(),
    season_number: z.number(),
    vote_average: z.number(),
});

// Schema for SpokenLanguage
export const SpokenLanguageSchema = z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string(),
});

// Main Schema for SeriesDetail
export const seriesDetailSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string(),
    created_by: CreatedBySchema.array(),
    episode_run_time: z.array(z.any()), // Accepts any array
    first_air_date: z.string(),
    genres: GenreSchema.array(),
    homepage: z.string(),
    id: z.number(),
    in_production: z.boolean(),
    languages: z.string().array(),
    last_air_date: z.string(),
    last_episode_to_air: LastEpisodeToAirSchema,
    name: z.string(),
    next_episode_to_air: z.null(), // Explicit null
    networks: NetworkSchema.array(),
    number_of_episodes: z.number(),
    number_of_seasons: z.number(),
    origin_country: z.string().array(),
    original_language: z.string(),
    original_name: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    production_companies: NetworkSchema.array(), // Reusing NetworkSchema
    production_countries: ProductionCountrySchema.array(),
    seasons: SeasonSchema.array().nullable(),
    spoken_languages: SpokenLanguageSchema.array(),
    status: z.string(),
    tagline: z.string(),
    type: z.string(),
    vote_average: z.number(),
    vote_count: z.number(),
});

export const tvListResult = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(), // Allow null or string
    genre_ids: z.number().array(), // Array of numbers
    id: z.number(),
    origin_country: z.string().array(), // Array of strings
    original_language: z.string(),
    original_name: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    first_air_date: z.string(), // Date object
    name: z.string(),
    vote_average: z.number(),
    vote_count: z.number(),
});

// Schema for popularTvSeries
export const tvListSchema = z.object({
    page: z.number(),
    results: tvListResult.array(), // Array of popularTv objects
    total_pages: z.number(),
    total_results: z.number(),
});

export const MediaTypeSchema = z.enum(['tv']);

// Schema for Result
export const recommendationSchema = z.object({
    backdrop_path: z.string(),
    id: z.number(),
    name: z.string(),
    original_name: z.string(),
    overview: z.string(),
    poster_path: z.string(),
    media_type: MediaTypeSchema,
    adult: z.boolean(),
    original_language: z.string(),
    genre_ids: z.number().array(),
    popularity: z.number(),
    first_air_date: z.string(),
    vote_average: z.number(),
    vote_count: z.number(),
    origin_country: z.string().array(),
});

// Schema for Recommendations
export const recommendationsSchema = z.object({
    page: z.number(),
    results: recommendationSchema.array(),
    total_pages: z.number(),
    total_results: z.number(),
});