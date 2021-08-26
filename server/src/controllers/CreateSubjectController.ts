import { Request, Response } from "express";
import { CreateSubjectService } from "../services/CreateSubjectService";

class CreateSubjectController {
  async handle(req: Request, res: Response) {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send();
    }

    const createSubjectService = new CreateSubjectService();

    const subject = await createSubjectService.execute(title);

    if (!subject) {
      return res.status(500).send();
    }

    return res.status(201).json({ subject });
  }
}

export { CreateSubjectController };
