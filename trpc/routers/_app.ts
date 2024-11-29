import {createTRPCRouter} from '../init';
import {moviesRouter} from "@/trpc/routers/movies";
import {collectionsRouter} from "@/trpc/routers/collections";
import {tvRouter} from "@/trpc/routers/tv";
import {reviewsRouter} from "@/trpc/routers/reviews";

export const appRouter = createTRPCRouter({
  movies:moviesRouter,
  collections:collectionsRouter,
  tv:tvRouter,
  reviews:reviewsRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;