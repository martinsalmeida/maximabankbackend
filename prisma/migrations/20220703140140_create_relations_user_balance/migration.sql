/*
  Warnings:

  - A unique constraint covering the columns `[balanceUser]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `balanceUser` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "balanceUser" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_balanceUser_key" ON "users"("balanceUser");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_balanceUser_fkey" FOREIGN KEY ("balanceUser") REFERENCES "balances"("login") ON DELETE RESTRICT ON UPDATE CASCADE;
