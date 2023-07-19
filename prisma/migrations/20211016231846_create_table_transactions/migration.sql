-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "account" TEXT,
    "description" TEXT,
    "category" TEXT,
    "reference" TEXT,
    "currency" TEXT,
    "amount" DOUBLE PRECISION,
    "status" TEXT,
    "transactionDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3),
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);
