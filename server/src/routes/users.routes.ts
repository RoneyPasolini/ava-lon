import { Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { ListUsersController } from "../controllers/ListUsersController";

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();

const usersRoutes = Router();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUsersController.handle);

export { usersRoutes };
