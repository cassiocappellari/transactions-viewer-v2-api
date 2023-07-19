import { Router } from "express";
import multer from "multer";
import CreateTransactionController from "./controllers/CreateTransactionController";

const router = Router();
const multerConfig = multer();
const createTransactionController = new CreateTransactionController();

router.post("/transactions", multerConfig.single("file"), createTransactionController.importTransactions);

export { router };