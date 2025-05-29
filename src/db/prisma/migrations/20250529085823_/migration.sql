/*
  Warnings:

  - A unique constraint covering the columns `[recipientArticleId,requesterCardId]` on the table `Exchange` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Exchange_recipientArticleId_requesterCardId_key" ON "Exchange"("recipientArticleId", "requesterCardId");
