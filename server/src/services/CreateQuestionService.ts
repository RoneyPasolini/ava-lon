import { getRepository } from "typeorm";
import { Question } from "../entities/Question";
import { v4 as uuidv4 } from "uuid";

class CreateQuestionService {
  async execute(text: string) {
    const questionsRepository = await getRepository(Question);

    const question = await questionsRepository.create({
      id: uuidv4(),
      text,
      answers: [],
    });

    await questionsRepository.save(question);

    return question;
  }
}

export { CreateQuestionService };
