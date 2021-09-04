import { Request, Response } from "express";
import { CreateAnswerService } from "../services/CreateAnswerService";
import { CreateQuizService } from "../services/CreateQuizService";

class CreateQuizController {
  async handle(req: Request, res: Response) {
    const { activity_id } = req.body;

    if (!activity_id) {
      return res.status(400).send();
    }

    const createQuizService = new CreateQuizService();
    const quiz = await createQuizService.execute(activity_id, []);

    if (!quiz || !quiz.id) {
      return res.status(500).send();
    }

    return res.status(201).json({ quiz });
  }
}

export { CreateQuizController };
