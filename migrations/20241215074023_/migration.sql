/*
  Warnings:

  - You are about to drop the column `ProductId` on the `Shipping` table. All the data in the column will be lost.
  - Added the required column `productId` to the `Shipping` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Shipping` DROP COLUMN `ProductId`,
    ADD COLUMN `productId` INTEGER NOT NULL;
