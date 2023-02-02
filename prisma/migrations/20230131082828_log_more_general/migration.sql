/*
  Warnings:

  - You are about to drop the `GenerationLog` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "GenerationLog";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "time" BIGINT NOT NULL,
    "user_id" TEXT NOT NULL,
    "prompt" TEXT,
    "response" TEXT,
    "url" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Log_user_id_key" ON "Log"("user_id");
