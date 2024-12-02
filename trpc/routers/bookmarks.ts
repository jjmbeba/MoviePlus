import {baseProcedure, createTRPCRouter} from "@/trpc/init";
import {z} from "zod";
import {prisma} from "@/prisma/client";
import {auth} from "@clerk/nextjs/server";
import {TRPCError} from "@trpc/server";

export const bookmarksRouter = createTRPCRouter({
    getUserBookmarks:baseProcedure.query(async () => {
        const {userId} = await auth();

        if (!userId){
            throw new TRPCError({
                message:"User not authenticated",
                code:"FORBIDDEN"
            })
        }

        return prisma.bookmark.findMany({
            where: {
                userId
            }
        });
    }),
    createBookmark:baseProcedure.input(
        z.object({
            recordId:z.number(),
            mediaType:z.string(),
            posterPath:z.string(),
            backdropPath:z.string(),
            title:z.string()
        })
    ).mutation(async ({input}) => {
        const {userId} = await auth();

        if (!userId){
            throw new TRPCError({
                message:"User not authenticated",
                code:"FORBIDDEN"
            })
        }

        const newBookmark = await prisma.bookmark.create({
            data:{
                userId,
                ...input
            }
        });

        return {
            message:"Bookmark added successfully",
            record:newBookmark
        }
    })
});

export type BookmarksRouter = typeof bookmarksRouter;