import { getRepository } from "typeorm";
import { Question } from "../entities/Question";
import { Quiz } from "../entities/Quiz";

interface CreateQuestionData {
  text: string;
  quiz_id: string;
}

class CreateQuestionService {
  async execute({ text, quiz_id }: CreateQuestionData) {
    const questionsRepository = await getRepository(Question);
    const quizzesRepository = await getRepository(Quiz);

    const quiz = await quizzesRepository.findOne(quiz_id);

    if (!quiz) {
      return null;
    }

    const question = await questionsRepository.create({
      text,
      quiz,
    });

    await questionsRepository.save(question);

    return question;
  }
}

export { CreateQuestionService };
