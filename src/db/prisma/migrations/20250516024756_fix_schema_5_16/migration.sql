/*
  Warnings:

  - You are about to drop the column `genre` on the `CardArticle` table. All the data in the column will be lost.
  - You are about to drop the column `rank` on the `CardArticle` table. All the data in the column will be lost.
  - You are about to drop the column `sellingQuantity` on the `CardArticle` table. All the data in the column will be lost.
  - Added the required column `exchangeGenre` to the `CardArticle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exchangeRank` to the `CardArticle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `remainingQuantity` to the `CardArticle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalQuantity` to the `CardArticle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Exchange` table without a default value. This is not possible if the table is not empty.
  - Added the required column `exchangeId` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `Notification` table without a default value. This is not possible if the table is not empty.
  - Added the required column `creatorId` to the `PhotoCard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `UserPhotoCard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CardArticle" DROP COLUMN "genre",
DROP COLUMN "rank",
DROP COLUMN "sellingQuantity",
ADD COLUMN     "exchangeGenre" "Genre" NOT NULL,
ADD COLUMN     "exchangeRank" "RankList" NOT NULL,
ADD COLUMN     "remainingQuantity" INTEGER NOT NULL,
ADD COLUMN     "totalQuantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Exchange" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Notification" ADD COLUMN     "exchangeId" TEXT NOT NULL,
ADD COLUMN     "orderId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PhotoCard" ADD COLUMN     "creatorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserPhotoCard" ADD COLUMN     "price" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_exchangeId_fkey" FOREIGN KEY ("exchangeId") REFERENCES "Exchange"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PhotoCard" ADD CONSTRAINT "PhotoCard_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
