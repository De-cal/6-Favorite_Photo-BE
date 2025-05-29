/*
  Warnings:

  - You are about to drop the column `recipientCardId` on the `Exchange` table. All the data in the column will be lost.
  - Added the required column `recipientArticleId` to the `Exchange` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Exchange" DROP CONSTRAINT "Exchange_recipientCardId_fkey";

-- AlterTable
ALTER TABLE "Exchange" DROP COLUMN "recipientCardId",
ADD COLUMN     "recipientArticleId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Exchange" ADD CONSTRAINT "Exchange_recipientArticleId_fkey" FOREIGN KEY ("recipientArticleId") REFERENCES "CardArticle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
