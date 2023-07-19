export type Transaction = {
  id: string;
  account?: string;
  description?: string;
  category?: string;
  reference?: string;
  currency?: string;
  amount?: number;
  status?: string;
  transactionDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
};