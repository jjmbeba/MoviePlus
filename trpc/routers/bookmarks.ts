import {baseProcedure, createTRPCRouter} from "@/trpc/init";
import {z} from "zod";
import {prisma} from "@/prisma/client";
import {auth} from "@clerk/nextjs/server";
import {TRPCError} from "@trpc/server";

export const bookmarksRouter = createTRPCRouter({
    getUserBookmarks: baseProcedure.query(async () => {
        const {userId} = await auth();

        if (!userId) {
            throw new TRPCError({
                message: "User not authenticated",
                code: "FORBIDDEN"
            })
        }

        return prisma.bookmark.findMany({
            where: {
                userId
            }
        });
    }),
    createBookmark: baseProcedure.input(
        z.object({
            recordId: z.number(),
            mediaType: z.string(),
            posterPath: z.string(),
            backdropPath: z.string(),
            title: z.string()
        })
    ).mutation(async ({input}) => {
        const {userId} = await auth();

        if (!userId) {
            throw new TRPCError({
                message: "Login to continue",
                code: "FORBIDDEN",
            })
        }

        const foundBookmark = await prisma.bookmark.findFirst({
            where: {
                userId,
                ...input
            }
        })

        if (foundBookmark) {
            await prisma.bookmark.delete({
                where: {
                    id: foundBookmark.id
                }
            });

            return {
                message: "Bookmark deleted successfully",
            }
        } else {
            const newBookmark = await prisma.bookmark.create({
                data: {
                    userId,
                    ...input
                }
            });

            return {
                message: "Bookmark added successfully",
                record: newBookmark
            }
        }
    }),
    isBookmarked: baseProcedure.input(
        z.object({
            recordId: z.number(),
            mediaType: z.string()
        })
    ).query(async ({input}) => {
        const {userId} = await auth();

        if (!userId) return;

        const bookmarks = await prisma.bookmark.findMany({
            where: {
                userId
            }
        });

        return bookmarks.some((bookmark) => bookmark.recordId === input.recordId && bookmark.mediaType === input.mediaType);
    })
});

export type BookmarksRouter = typeof bookmarksRouter;