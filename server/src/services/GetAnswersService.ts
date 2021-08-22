import { getRepository } from "typeorm";
import { Answer } from "../entities/Answer";

class GetAnswersService {
  async execute(question_id: string) {
    const answerRepository = getRepository(Answer);

    const answers = await answerRepository.find({
      question_id,
    });

    return answers;
  }
}

export { GetAnswersService };
