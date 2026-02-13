-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('Earnings', 'Deduction', 'Net');

-- CreateTable
CREATE TABLE "PayItem" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "type" "ItemType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PayItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Formula" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "expression" TEXT NOT NULL,
    "payItemId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Formula_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PayItem_code_key" ON "PayItem"("code");

-- AddForeignKey
ALTER TABLE "Formula" ADD CONSTRAINT "Formula_payItemId_fkey" FOREIGN KEY ("payItemId") REFERENCES "PayItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
