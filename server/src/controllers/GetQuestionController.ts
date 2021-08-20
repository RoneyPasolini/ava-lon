import { Request, Response } from "express";
import { GetQuestionService } from "../services/GetQuestionService";

class GetQuestionController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).send();
    }

    const getQuestionService = new GetQuestionService();

    const question = await getQuestionService.execute(id);

    return res.status(200).json(question);
  }
}

export { GetQuestionController };
