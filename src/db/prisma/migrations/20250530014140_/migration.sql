/*
  Warnings:

  - A unique constraint covering the columns `[requesterUserId,recipientArticleId]` on the table `Exchange` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Exchange_requesterUserId_recipientArticleId_key" ON "Exchange"("requesterUserId", "recipientArticleId");
