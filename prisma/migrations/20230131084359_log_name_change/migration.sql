/*
  Warnings:

  - You are about to drop the column `function` on the `Log` table. All the data in the column will be lost.
  - Added the required column `function_name` to the `Log` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Log" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "time" BIGINT NOT NULL,
    "user_id" TEXT NOT NULL,
    "prompt" TEXT,
    "response" TEXT,
    "function_name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "status" INTEGER NOT NULL
);
INSERT INTO "new_Log" ("id", "prompt", "response", "status", "time", "url", "user_id") SELECT "id", "prompt", "response", "status", "time", "url", "user_id" FROM "Log";
DROP TABLE "Log";
ALTER TABLE "new_Log" RENAME TO "Log";
CREATE UNIQUE INDEX "Log_user_id_key" ON "Log"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
