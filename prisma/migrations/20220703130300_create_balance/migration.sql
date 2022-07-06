-- CreateTable
CREATE TABLE "balances" (
    "login" VARCHAR NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "balances_pkey" PRIMARY KEY ("login")
);

-- CreateIndex
CREATE UNIQUE INDEX "balances_login_key" ON "balances"("login");
