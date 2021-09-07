import { getRepository } from "typeorm";
import { Question } from "../entities/Question";

class GetQuestionsAndAnswersService {
  async execute(quiz_id: string) {
    const questionsRepository = await getRepository(Question);

    const questions = await questionsRepository
      .createQueryBuilder("question")
      .innerJoin("question.answers", "answer")
      .select(["question.id", "question.text", "answer.id", "answer.text"])
      .where("question.quiz_id = :quiz_id")
      .setParameters({ quiz_id })
      .getMany();

    return questions;
  }
}

export { GetQuestionsAndAnswersService };
