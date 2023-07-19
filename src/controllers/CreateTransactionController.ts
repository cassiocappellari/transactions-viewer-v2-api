import { Request, Response } from "express";
import CreateTransactionService from "../services/CreateTransactionService";

class CreateTransactionController {

  async importTransactions(request: Request, response: Response) { 
    try {
      const { file } = request;
      const { buffer } = file;

      await CreateTransactionService.importTransactions(buffer);
  
      return response.status(201).send({ message: "transactions successfully created" });
    } catch(error) {
      return response.status(500).send({ message: "internal server error" })
    }
  };

};

export default CreateTransactionController;