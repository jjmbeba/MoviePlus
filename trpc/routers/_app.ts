import {createTRPCRouter} from '../init';
import {moviesRouter} from "@/trpc/routers/movies";
import {collectionsRouter} from "@/trpc/routers/collections";
import {tvRouter} from "@/trpc/routers/tv";

export const appRouter = createTRPCRouter({
  movies:moviesRouter,
  collections:collectionsRouter,
  tv:tvRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;