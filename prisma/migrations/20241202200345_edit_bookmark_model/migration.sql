/*
  Warnings:

  - Added the required column `backdropPath` to the `Bookmark` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posterPath` to the `Bookmark` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bookmark" ADD COLUMN     "backdropPath" TEXT NOT NULL,
ADD COLUMN     "posterPath" TEXT NOT NULL;
