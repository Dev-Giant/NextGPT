-- CreateTable
CREATE TABLE "GenerationLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "time" BIGINT NOT NULL,
    "user_id" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "response" TEXT NOT NULL,
    "browser_language" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "GenerationLog_user_id_key" ON "GenerationLog"("user_id");
