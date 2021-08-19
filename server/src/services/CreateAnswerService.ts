import { getRepository } from "typeorm";
import { Question } from "../entities/Question";
import { Answer } from "../entities/Answer";

interface CreateAnswerData {
  question: Question;
  text: string;
  isCorrect: boolean;
}

class CreateAnswerService {
  async execute({ question, text, isCorrect }: CreateAnswerData) {
    const answersRepository = await getRepository(Answer);

    const answer = await answersRepository.create({
      text,
      isCorrect,
      question: question,
    });

    await answersRepository.save(answer);

    return answer;
  }
}

export { CreateAnswerService };
