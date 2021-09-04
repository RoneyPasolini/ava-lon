import { Router } from "express";
import { CreateActivityController } from "../controllers/CreateActivityController";
import { CreateQuizController } from "../controllers/CreateQuizController";

const createQuizController = new CreateQuizController();
const createActivityController = new CreateActivityController();

const activitiesRoutes = Router();

activitiesRoutes.post("/", createActivityController.handle);
activitiesRoutes.post("/quiz", createQuizController.handle);

export { activitiesRoutes };
