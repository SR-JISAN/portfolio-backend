/*
  Warnings:

  - A unique constraint covering the columns `[verificationToken]` on the table `message` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "message" ADD COLUMN     "verificationToken" TEXT,
ADD COLUMN     "verified" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE UNIQUE INDEX "message_verificationToken_key" ON "message"("verificationToken");
