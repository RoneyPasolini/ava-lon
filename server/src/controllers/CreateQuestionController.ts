import { Request, Response } from "express";
import { CreateQuestionService } from "../services/CreateQuestionService";

class CreateQuestionController {
  async handle(req: Request, res: Response) {
    const { text } = req.body;

    if (!text) {
      return res.status(400).send();
    }

    const createQuestionService = new CreateQuestionService();

    const user = await createQuestionService.execute(text);

    return res.status(201).json(user);
  }
}

export { CreateQuestionController };
