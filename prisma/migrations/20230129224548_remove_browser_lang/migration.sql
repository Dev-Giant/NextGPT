/*
  Warnings:

  - You are about to drop the column `browser_language` on the `GenerationLog` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GenerationLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "time" BIGINT NOT NULL,
    "user_id" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "response" TEXT NOT NULL
);
INSERT INTO "new_GenerationLog" ("id", "prompt", "response", "time", "user_id") SELECT "id", "prompt", "response", "time", "user_id" FROM "GenerationLog";
DROP TABLE "GenerationLog";
ALTER TABLE "new_GenerationLog" RENAME TO "GenerationLog";
CREATE UNIQUE INDEX "GenerationLog_user_id_key" ON "GenerationLog"("user_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
