import { Router } from "express";
import { CreateQuestionController } from "../controllers/CreateQuestionController";
import { GetQuestionController } from "../controllers/GetQuestionController";

const getQuestionController = new GetQuestionController();
const createQuestionController = new CreateQuestionController();

const questionsRoutes = Router();

questionsRoutes.post("/", createQuestionController.handle);
questionsRoutes.get("/:id", getQuestionController.handle);

export { questionsRoutes };
