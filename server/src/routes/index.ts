import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { questionsRoutes } from "./questions.routes";
import { subjectsRoutes } from "./subjects.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/questions", questionsRoutes);
routes.use("/subjects", subjectsRoutes);

export { routes };
