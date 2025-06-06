-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('EXCHANGE_PROPOSED', 'EXCHANGE_ACCEPTED', 'EXCHANGE_REJECTED', 'ORDER_COMPLETED_BUYER', 'ORDER_COMPLETED_SELLER', 'SOLDOUT');

-- CreateEnum
CREATE TYPE "RankList" AS ENUM ('COMMON', 'RARE', 'SUPERRARE', 'LEGENDARY');

-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('LANDSCAPE', 'PORTRAIT', 'ANIMAL', 'OBJECT', 'FOOD', 'ETC');

-- CreateEnum
CREATE TYPE "UserPhotocardStatus" AS ENUM ('OWNED', 'SELLING', 'EXCHANGE_REQUESTED', 'SOLDOUT');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'ACCEPTED', 'COMPLETED', 'CANCELED');

-- CreateEnum
CREATE TYPE "ExchangeStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'COMPLETED', 'CANCELED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "pointAmount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "isRead" BOOLEAN NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhotoCard" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "rank" "RankList" NOT NULL,
    "genre" "Genre" NOT NULL,
    "price" INTEGER NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PhotoCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserPhotoCard" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "photoCardId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "status" "UserPhotocardStatus" NOT NULL,

    CONSTRAINT "UserPhotoCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CardArticle" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "sellingQuantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "exchangeText" TEXT NOT NULL,
    "rank" "RankList" NOT NULL,
    "genre" "Genre" NOT NULL,
    "userPhotoCardId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CardArticle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "totalPrice" INTEGER NOT NULL,
    "status" "OrderStatus" NOT NULL,
    "userPhotoCardId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "photoCardId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exchange" (
    "id" TEXT NOT NULL,
    "giverCardId" TEXT NOT NULL,
    "takerCardId" TEXT NOT NULL,
    "status" "ExchangeStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Exchange_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPhotoCard" ADD CONSTRAINT "UserPhotoCard_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserPhotoCard" ADD CONSTRAINT "UserPhotoCard_photoCardId_fkey" FOREIGN KEY ("photoCardId") REFERENCES "PhotoCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CardArticle" ADD CONSTRAINT "CardArticle_userPhotoCardId_fkey" FOREIGN KEY ("userPhotoCardId") REFERENCES "UserPhotoCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userPhotoCardId_fkey" FOREIGN KEY ("userPhotoCardId") REFERENCES "UserPhotoCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_photoCardId_fkey" FOREIGN KEY ("photoCardId") REFERENCES "PhotoCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exchange" ADD CONSTRAINT "Exchange_giverCardId_fkey" FOREIGN KEY ("giverCardId") REFERENCES "UserPhotoCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exchange" ADD CONSTRAINT "Exchange_takerCardId_fkey" FOREIGN KEY ("takerCardId") REFERENCES "UserPhotoCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
