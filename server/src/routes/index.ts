import { Router } from "express";

import { usersRoutes } from "./users.routes";
import { questionsRoutes } from "./questions.routes";
import { subjectsRoutes } from "./subjects.routes";
import { activitiesRoutes } from "./activities.routes";
import { modulesRoutes } from "./modules.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/questions", questionsRoutes);
routes.use("/subjects", subjectsRoutes);
routes.use("/activities", activitiesRoutes);
routes.use("/modules", modulesRoutes);

export { routes };
