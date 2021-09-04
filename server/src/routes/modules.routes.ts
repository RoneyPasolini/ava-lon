import { Router } from "express";
import { CreateModuleController } from "../controllers/CreateModuleController";

const createModuleController = new CreateModuleController();

const modulesRoutes = Router();

modulesRoutes.post("/", createModuleController.handle);

export { modulesRoutes };
