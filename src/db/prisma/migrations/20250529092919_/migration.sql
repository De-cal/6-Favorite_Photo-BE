/*
  Warnings:

  - Added the required column `requesterUserId` to the `Exchange` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Exchange_recipientArticleId_requesterCardId_key";

-- AlterTable
ALTER TABLE "Exchange" ADD COLUMN     "requesterUserId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Exchange" ADD CONSTRAINT "Exchange_requesterUserId_fkey" FOREIGN KEY ("requesterUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
