/*
  Warnings:

  - You are about to drop the column `description` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `stock` on the `product` table. All the data in the column will be lost.
  - Added the required column `proName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proPrice` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `description`,
    DROP COLUMN `name`,
    DROP COLUMN `price`,
    DROP COLUMN `stock`,
    ADD COLUMN `proDescription` TEXT NULL,
    ADD COLUMN `proName` VARCHAR(191) NOT NULL,
    ADD COLUMN `proPrice` DECIMAL(10, 2) NOT NULL,
    ADD COLUMN `proQuantity` INTEGER NOT NULL DEFAULT 0;
