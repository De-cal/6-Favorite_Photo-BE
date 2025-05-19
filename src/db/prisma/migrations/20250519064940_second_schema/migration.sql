/*
  Warnings:

  - The values [COMPLETED] on the enum `ExchangeStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `exchangeId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `photoCardId` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Notification` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Order` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ExchangeStatus_new" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'CANCELED');
ALTER TABLE "Exchange" ALTER COLUMN "status" TYPE "ExchangeStatus_new" USING ("status"::text::"ExchangeStatus_new");
ALTER TYPE "ExchangeStatus" RENAME TO "ExchangeStatus_old";
ALTER TYPE "ExchangeStatus_new" RENAME TO "ExchangeStatus";
DROP TYPE "ExchangeStatus_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_exchangeId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Notification" DROP CONSTRAINT "Notification_photoCardId_fkey";

-- AlterTable
ALTER TABLE "Notification" DROP COLUMN "exchangeId",
DROP COLUMN "orderId",
DROP COLUMN "photoCardId",
DROP COLUMN "type";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "status";

-- DropEnum
DROP TYPE "NotificationType";

-- DropEnum
DROP TYPE "OrderStatus";
