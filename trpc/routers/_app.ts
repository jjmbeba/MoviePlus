import {createTRPCRouter} from '../init';
import {moviesRouter} from "@/trpc/routers/movies";
import {collectionsRouter} from "@/trpc/routers/collections";
import {tvRouter} from "@/trpc/routers/tv";
import {reviewsRouter} from "@/trpc/routers/reviews";
import {inferRouterOutputs} from "@trpc/server";
import {bookmarksRouter} from "@/trpc/routers/bookmarks";
import {searchRouter} from "@/trpc/routers/search";

export const appRouter = createTRPCRouter({
  movies:moviesRouter,
  collections:collectionsRouter,
  tv:tvRouter,
  reviews:reviewsRouter,
  bookmarks:bookmarksRouter,
  search:searchRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;
export type RouterOutputs = inferRouterOutputs<AppRouter>