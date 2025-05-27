/*
  Warnings:

  - You are about to drop the column `giverCardId` on the `Exchange` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Exchange` table. All the data in the column will be lost.
  - You are about to drop the column `takerCardId` on the `Exchange` table. All the data in the column will be lost.
  - You are about to drop the `Order` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `recipientCardId` to the `Exchange` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requesterCardId` to the `Exchange` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Exchange" DROP CONSTRAINT "Exchange_giverCardId_fkey";

-- DropForeignKey
ALTER TABLE "Exchange" DROP CONSTRAINT "Exchange_takerCardId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_photoCardId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_userPhotoCardId_fkey";

-- AlterTable
ALTER TABLE "Exchange" DROP COLUMN "giverCardId",
DROP COLUMN "status",
DROP COLUMN "takerCardId",
ADD COLUMN     "recipientCardId" TEXT NOT NULL,
ADD COLUMN     "requesterCardId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Order";

-- DropEnum
DROP TYPE "ExchangeStatus";

-- AddForeignKey
ALTER TABLE "Exchange" ADD CONSTRAINT "Exchange_requesterCardId_fkey" FOREIGN KEY ("requesterCardId") REFERENCES "UserPhotoCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exchange" ADD CONSTRAINT "Exchange_recipientCardId_fkey" FOREIGN KEY ("recipientCardId") REFERENCES "UserPhotoCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
