import { Readable } from "stream";
import { Transaction } from "../types/transaction";
import readline from "readline";

const fileReader = async (fileBuffer: Buffer) => {
  const readableFile = new Readable();
  readableFile.push(fileBuffer);
  readableFile.push(null);

  const transactionsLine = readline.createInterface({
    input: readableFile
  });

  const transactions: Transaction[] = [];

  for await (let line of transactionsLine) {
    const transactionLineSplit = line.split(",");

    transactions.push({
      id: transactionLineSplit[0],
      account: transactionLineSplit[1],
      description: transactionLineSplit[2],
      category: transactionLineSplit[3],
      reference: transactionLineSplit[4],
      currency: transactionLineSplit[5],
      amount: Number(transactionLineSplit[6]),
      status: transactionLineSplit[7],
      transactionDate: new Date(transactionLineSplit[8]),
      createdAt: new Date(transactionLineSplit[9]),
      updatedAt: new Date(transactionLineSplit[10]),
    });
  };

  return transactions;
};

export default fileReader;