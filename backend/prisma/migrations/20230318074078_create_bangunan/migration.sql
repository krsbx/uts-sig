-- CreateTable
CREATE TABLE "bangunan_ar_50k" (
    "gid" SERIAL NOT NULL,
    "namobj" VARCHAR(50),
    "fcode" VARCHAR(50),
    "remark" VARCHAR(250),
    "srs_id" VARCHAR(50),
    "lcode" VARCHAR(50),
    "metadata" VARCHAR(50),
    "shape_leng" DECIMAL,
    "shape_area" DECIMAL,

    CONSTRAINT "bangunan_ar_50k_pkey" PRIMARY KEY ("gid")
);

-- AddGeometryColumn
SELECT AddGeometryColumn('','bangunan_ar_50k','geom','4326','MULTIPOLYGON',4);

-- AlterTable
ALTER TABLE "bangunan_ar_50k" ALTER COLUMN "geom" SET NOT NULL;

-- CreateIndex
CREATE INDEX "bangunan_ar_50k_geom_idx" ON "bangunan_ar_50k" USING GIST ("geom");
