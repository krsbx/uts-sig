-- CreateTable
CREATE TABLE "administrasikecamatan_ar_50k" (
    "gid" SERIAL NOT NULL,
    "kdppum" VARCHAR(2),
    "namobj" VARCHAR(50),
    "remark" VARCHAR(250),
    "kdpbps" VARCHAR(2),
    "fcode" VARCHAR(50),
    "luaswh" DECIMAL,
    "uupp" VARCHAR(50),
    "srs_id" VARCHAR(50),
    "lcode" VARCHAR(50),
    "metadata" VARCHAR(50),
    "kdebps" VARCHAR(50),
    "kdepum" VARCHAR(50),
    "kdcbps" VARCHAR(50),
    "kdcpum" VARCHAR(50),
    "kdbbps" VARCHAR(50),
    "kdbpum" VARCHAR(50),
    "wadmkd" VARCHAR(50),
    "wiadkd" VARCHAR(50),
    "wadmkc" VARCHAR(50),
    "wiadkc" VARCHAR(50),
    "wadmkk" VARCHAR(50),
    "wiadkk" VARCHAR(50),
    "wadmpr" VARCHAR(50),
    "wiadpr" VARCHAR(50),
    "tipadm" DOUBLE PRECISION,
    "shape_leng" DECIMAL,
    "shape_area" DECIMAL,

    CONSTRAINT "administrasikecamatan_ar_50k_pkey" PRIMARY KEY ("gid")
);

-- AddGeometryColumn
SELECT AddGeometryColumn('','administrasikecamatan_ar_50k','geom','4326','MULTIPOLYGON',4);

-- AlterTable
ALTER TABLE "administrasikecamatan_ar_50k" ALTER COLUMN "geom" SET NOT NULL;

-- CreateIndex
CREATE INDEX "administrasikecamatan_ar_50k_geom_idx" ON "administrasikecamatan_ar_50k" USING GIST ("geom");
