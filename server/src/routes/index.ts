import { Router } from "express";
import { CreateQuestionController } from "../controllers/CreateQuestionController";
import { GetQuestionController } from "../controllers/GetQuestionController";
import { CreateSubjectController } from "../controllers/CreateSubjectController";

import { usersRoutes } from "./users.routes";

const routes = Router();

const getQuestionController = new GetQuestionController();
const createQuestionController = new CreateQuestionController();
const createSubjectController = new CreateSubjectController();

routes.use("/users", usersRoutes);

routes.post("/questions", createQuestionController.handle);
routes.get("/questions/:id", getQuestionController.handle);

routes.post("/subjects", createSubjectController.handle);

export { routes };
