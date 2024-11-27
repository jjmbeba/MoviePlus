import {createTRPCRouter} from '../init';
import {moviesRouter} from "@/trpc/routers/movies";

export const appRouter = createTRPCRouter({
  movies:moviesRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;