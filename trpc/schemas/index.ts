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

export const BelongsToCollectionSchema = z.object({
    id: z.number(),
    name: z.string(),
    poster_path: z.string(),
    backdrop_path: z.string(),
});

export const GenreSchema = z.object({
    id: z.number(),
    name: z.string(),
});

export const ProductionCompanySchema = z.object({
    id: z.number(),
    logo_path: z.string().nullable(),
    name: z.string(),
    origin_country: z.string(),
});

export const ProductionCountrySchema = z.object({
    iso_3166_1: z.string(),
    name: z.string(),
});

export const SpokenLanguageSchema = z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string(),
});

// Main MovieDetail schema
export const movieDetailSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string(),
    belongs_to_collection: BelongsToCollectionSchema.nullable(), // Optional or null
    budget: z.number(),
    genres: GenreSchema.array(),
    homepage: z.string(),
    id: z.number(),
    imdb_id: z.string(),
    origin_country: z.string().array(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    production_companies: ProductionCompanySchema.array().nullable(),
    production_countries: ProductionCountrySchema.array(),
    release_date: z.string(),
    revenue: z.number(),
    runtime: z.number(),
    spoken_languages: SpokenLanguageSchema.array(),
    status: z.string(),
    tagline: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
});