import { getRepository } from "typeorm";
import { Question } from "../entities/Question";

interface CreateQuestionData {
  text: string;
}

class CreateQuestionService {
  async execute({ text }: CreateQuestionData) {
    const questionsRepository = await getRepository(Question);

    const question = await questionsRepository.create({
      text,
    });

    await questionsRepository.save(question);

    return question;
  }
}

export { CreateQuestionService };
