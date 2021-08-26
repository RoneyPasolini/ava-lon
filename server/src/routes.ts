import { Request, Response, Router } from "express";
import { CreateQuestionController } from "./controllers/CreateQuestionController";
import { CreateSubjectController } from "./controllers/CreateSubjectController";
import { CreateUserController } from "./controllers/CreateUserController";
import { GetQuestionController } from "./controllers/GetQuestionController";
import { ListUsersController } from "./controllers/ListUsersController";

const routes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const getQuestionController = new GetQuestionController();
const createQuestionController = new CreateQuestionController();
const createSubjectController = new CreateSubjectController();

routes.post("/users", createUserController.handle);
routes.get("/users", listUsersController.handle);

routes.post("/questions", createQuestionController.handle);
routes.get("/questions/:id", getQuestionController.handle);

routes.post("/subjects", createSubjectController.handle);

export { routes };
