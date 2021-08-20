import { Request, Response } from "express";
import { CreateAnswerService } from "../services/CreateAnswerService";
import { CreateQuestionService } from "../services/CreateQuestionService";

class CreateQuestionController {
  async handle(req: Request, res: Response) {
    const { text, answers } = req.body;

    if (!text) {
      return res.status(400).send();
    }

    const createQuestionService = new CreateQuestionService();
    const question = await createQuestionService.execute({ text });
    if (!question || !question.id) {
      return res.status(500).send();
    }

    const createAnswerService = new CreateAnswerService();
    for (const currAnswer of answers) {
      await createAnswerService.execute({
        question_id: question.id,
        isCorrect: currAnswer.isCorrect,
        text: currAnswer.text,
      });
    }

    return res.status(201).json({ question });
  }
}

export { CreateQuestionController };
