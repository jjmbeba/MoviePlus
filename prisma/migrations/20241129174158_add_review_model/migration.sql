-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "body" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "userId" TEXT NOT NULL,
    "mediaType" TEXT NOT NULL,
    "recordId" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);
