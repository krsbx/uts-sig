-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis" WITH VERSION "3.3.2";

-- CreateTable
CREATE TABLE "kantorpln_pt_50k" (
    "gid" SERIAL NOT NULL,
    "namobj" VARCHAR(50),
    "fcode" VARCHAR(50),
    "remark" VARCHAR(250),
    "srs_id" VARCHAR(50),
    "lcode" VARCHAR(50),
    "metadata" VARCHAR(250),

    CONSTRAINT "kantorpln_pt_50k_pkey" PRIMARY KEY ("gid")
);

-- CreateTable
CREATE TABLE "kantorpos_pt_50k" (
    "gid" SERIAL NOT NULL,
    "namobj" VARCHAR(50),
    "fcode" VARCHAR(50),
    "jnkpos" DOUBLE PRECISION,
    "remark" VARCHAR(250),
    "srs_id" VARCHAR(50),
    "lcode" VARCHAR(50),
    "metadata" VARCHAR(250),

    CONSTRAINT "kantorpos_pt_50k_pkey" PRIMARY KEY ("gid")
);

-- CreateTable
CREATE TABLE "spbu_pt_50k" (
    "gid" SERIAL NOT NULL,
    "namobj" VARCHAR(50),
    "fcode" VARCHAR(50),
    "remark" VARCHAR(250),
    "srs_id" VARCHAR(50),
    "lcode" VARCHAR(50),
    "metadata" VARCHAR(250),

    CONSTRAINT "spbu_pt_50k_pkey" PRIMARY KEY ("gid")
);

-- CreateTable
CREATE TABLE "seed-history" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "seed-history_pkey" PRIMARY KEY ("id")
);

-- Add Geometry Column
SELECT AddGeometryColumn('','kantorpln_pt_50k','geom','4326','POINT',4);

-- Add Geometry Column
SELECT AddGeometryColumn('','kantorpos_pt_50k','geom','4326','POINT',4);

-- Add Geometry Column
SELECT AddGeometryColumn('','spbu_pt_50k','geom','4326','POINT',4);

-- CreateIndex
CREATE INDEX "kantorpln_pt_50k_geom_idx" ON "kantorpln_pt_50k" USING GIST ("geom");

-- CreateIndex
CREATE INDEX "kantorpos_pt_50k_geom_idx" ON "kantorpos_pt_50k" USING GIST ("geom");

-- CreateIndex
CREATE INDEX "spbu_pt_50k_geom_idx" ON "spbu_pt_50k" USING GIST ("geom");

-- CreateIndex
CREATE UNIQUE INDEX "seed-history_name_key" ON "seed-history"("name");
