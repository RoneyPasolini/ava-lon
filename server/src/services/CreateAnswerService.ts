import { getRepository } from "typeorm";
import { Question } from "../entities/Question";
import { Answer } from "../entities/Answer";

interface CreateAnswerData {
  question_id: string;
  text: string;
  isCorrect: boolean;
}

class CreateAnswerService {
  async execute({ question_id, text, isCorrect }: CreateAnswerData) {
    const answersRepository = await getRepository(Answer);
    const questionsRepository = await getRepository(Question);

    const question = await questionsRepository.findOne(question_id);

    if (!question) {
      return null;
    }

    const answer = await answersRepository.create({
      question,
      text,
      isCorrect,
    });

    await answersRepository.save(answer);

    return answer;
  }
}

export { CreateAnswerService };
