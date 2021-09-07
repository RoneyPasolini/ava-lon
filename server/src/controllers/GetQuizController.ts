import { Request, Response } from "express";
import { GetQuestionsAndAnswersService } from "../services/GetQuestionsAndAnswersService";

class GetQuizController {
  async handle(req: Request, res: Response) {
    const { quiz_id } = req.params;

    if (!quiz_id) {
      return res.status(400).send();
    }

    const getQuizQuestions = new GetQuestionsAndAnswersService();
    const questions = await getQuizQuestions.execute(quiz_id);

    return res.status(200).json({ questions });
  }
}

export { GetQuizController };
