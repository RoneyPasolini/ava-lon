import { Router } from "express";
import { CreateSubjectController } from "../controllers/CreateSubjectController";

const createSubjectController = new CreateSubjectController();

const subjectsRoutes = Router();

subjectsRoutes.post("/", createSubjectController.handle);

export { subjectsRoutes };
