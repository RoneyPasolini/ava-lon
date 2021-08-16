import { Request, Response, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const routes = Router();

const createUserController = new CreateUserController();

routes.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello World!" });
});

routes.post("/users", createUserController.handle);

export { routes };
