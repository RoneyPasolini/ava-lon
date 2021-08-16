import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, password, isAdmin, isTeacher } = req.body;

    if (!name || !email || !password) {
      return res.status(400).send();
    }

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({
      email,
      name,
      password,
      isTeacher,
      isAdmin,
    });

    return res.status(201).json(user);
  }
}

export { CreateUserController };
