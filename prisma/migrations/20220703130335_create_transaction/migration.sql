-- CreateTable
CREATE TABLE "transactions" (
    "id_transaction" SERIAL NOT NULL,
    "date" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "login_origin" VARCHAR NOT NULL,
    "login_destination" VARCHAR NOT NULL,
    "transaction_value" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id_transaction")
);
