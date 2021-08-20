import { getRepository } from "typeorm";
import { Question } from "../entities/Question";

class GetQuestionService {
  async execute(question_id: string) {
    const questionRepository = getRepository(Question);

    const question = await questionRepository.findOne(question_id);

    return question;
  }
}

export { GetQuestionService };
