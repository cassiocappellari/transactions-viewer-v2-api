import client from "../database/client";
import dateFormatter from "../utils/dateFormatter";

class GetTransactionService {

  static async getTransactions() {
    const transactions = await client.transactions.findMany();

    return transactions;
  };

  static async getTransactionsByDateRange(startMonth: string, endMonth: string) {
    const formatedDates = await dateFormatter(startMonth, endMonth);

    const transactions = await client.transactions.findMany({
      orderBy: [
        {
          createdAt: 'asc'
        }
      ],
      where: {
        createdAt: {
          gte: formatedDates.formattedStartDate,
          lte: formatedDates.formattedEndDate
        }
      }
    });

    return transactions;
  };

  static async getTransactionById(transactionId: string) {
    const transaction = await client.transactions.findUnique({
      where: {
        id: transactionId
      }
    });

    return transaction;
  }

};

export default GetTransactionService;