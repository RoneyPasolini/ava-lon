import { Request, Response } from "express";
import { GetAnswersService } from "../services/GetAnswersService";
import { GetQuestionService } from "../services/GetQuestionService";

class GetQuestionController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send();
    }

    const getQuestionService = new GetQuestionService();

    const question = await getQuestionService.execute(id);

    if (!question) {
      return res.status(400).send();
    }

    const answers = await new GetAnswersService().execute(id);

    return res.status(200).json({ question, answers });
  }
}

export { GetQuestionController };
