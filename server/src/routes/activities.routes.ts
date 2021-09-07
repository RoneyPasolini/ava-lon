import { Router } from "express";
import { CreateActivityController } from "../controllers/CreateActivityController";
import { CreateQuizController } from "../controllers/CreateQuizController";
import { GetQuizController } from "../controllers/GetQuizController";

const createQuizController = new CreateQuizController();
const getQuizController = new GetQuizController();
const createActivityController = new CreateActivityController();

const activitiesRoutes = Router();

activitiesRoutes.post("/", createActivityController.handle);

activitiesRoutes.post("/quiz", createQuizController.handle);
activitiesRoutes.get("/quiz/:quiz_id", getQuizController.handle);

export { activitiesRoutes };
