import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { questionsRoutes } from "./questions.routes";

import { CreateSubjectController } from "../controllers/CreateSubjectController";

const createSubjectController = new CreateSubjectController();

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/questions", questionsRoutes);

routes.post("/subjects", createSubjectController.handle);

export { routes };
