/*
  Warnings:

  - Made the column `geom` on table `kantorpln_pt_50k` required. This step will fail if there are existing NULL values in that column.
  - Made the column `geom` on table `kantorpos_pt_50k` required. This step will fail if there are existing NULL values in that column.
  - Made the column `geom` on table `spbu_pt_50k` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "kantorpln_pt_50k" ALTER COLUMN "geom" SET NOT NULL;

-- AlterTable
ALTER TABLE "kantorpos_pt_50k" ALTER COLUMN "geom" SET NOT NULL;

-- AlterTable
ALTER TABLE "spbu_pt_50k" ALTER COLUMN "geom" SET NOT NULL;
