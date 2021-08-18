import { getRepository } from "typeorm";
import { Question } from "../entities/Question";

class CreateQuestionService {
  async execute(text: string) {
    const questionsRepository = await getRepository(Question);

    const question = await questionsRepository.create({
      text,
    });

    await questionsRepository.save(question);

    return question;
  }
}

export { CreateQuestionService };
