-- CreateTable
CREATE TABLE "Tour" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "tourType" TEXT NOT NULL,
    "timeType" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "participantsNumber" INTEGER NOT NULL,
    "ageLimit" INTEGER NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "size" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Tour_name_key" ON "Tour"("name");
