/*
  Warnings:

  - The `status` column on the `UserPhotoCard` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserPhotoCardStatus" AS ENUM ('OWNED', 'SELLING', 'EXCHANGE_REQUESTED', 'SOLDOUT');

-- AlterTable
ALTER TABLE "Exchange" ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "UserPhotoCard" DROP COLUMN "status",
ADD COLUMN     "status" "UserPhotoCardStatus" NOT NULL DEFAULT 'OWNED';

-- DropEnum
DROP TYPE "UserPhotocardStatus";
