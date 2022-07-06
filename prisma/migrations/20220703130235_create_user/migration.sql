-- CreateTable
CREATE TABLE "users" (
    "login" VARCHAR NOT NULL,
    "name" VARCHAR,
    "password" VARCHAR NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("login")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_login_key" ON "users"("login");
