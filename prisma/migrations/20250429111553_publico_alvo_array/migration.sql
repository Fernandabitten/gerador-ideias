/*
  Warnings:

  - The `publicoAlvo` column on the `FavoriteIdea` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "FavoriteIdea" DROP COLUMN "publicoAlvo",
ADD COLUMN     "publicoAlvo" TEXT[];
