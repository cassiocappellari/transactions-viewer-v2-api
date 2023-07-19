import client from "../database/client";
import fileReader from "../utils/fileReader";

class CreateTransactionService {

  static async importTransactions(buffer: Buffer) {
    const transactions = await fileReader(buffer);

    for await (let {
      id,
      account,
      description,
      category,
      reference,
      currency,
      amount,
      status,
      transactionDate,
      createdAt,
      updatedAt,
    } of transactions) {
      await client.transactions.create({
        data: {
          id,
          account,
          description,
          category,
          reference,
          currency,
          amount,
          status,
          transactionDate,
          createdAt,
          updatedAt,
        }
      });
    };

    return transactions;
  };

};

export default CreateTransactionService;