import { Request, Response, Router } from "express";
import { CreateQuestionController } from "./controllers/CreateQuestionController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUsersController";

const routes = Router();

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

const createQuestionController = new CreateQuestionController();

routes.post("/users", createUserController.handle);
routes.get("/users", listUsersController.handle);

routes.post("/questions", createQuestionController.handle);

export { routes };
