import {createTRPCRouter} from '../init';
import {moviesRouter} from "@/trpc/routers/movies";
import {collectionsRouter} from "@/trpc/routers/collections";

export const appRouter = createTRPCRouter({
  movies:moviesRouter,
  collections:collectionsRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;