import { getRepository } from "typeorm";
import { Activity } from "../entities/Activity";
import { Question } from "../entities/Question";
import { Quiz } from "../entities/Quiz";

class CreateQuizService {
  async execute(activity_id: string, questions: Question[]) {
    const quizRepository = await getRepository(Quiz);
    const activitiesRepository = await getRepository(Activity);

    const activity = await activitiesRepository.findOne(activity_id);

    if (!activity) {
      return null;
    }

    const quiz = await quizRepository.create({
      questions,
      activity,
    });

    await quizRepository.save(quiz);

    return quiz;
  }
}

export { CreateQuizService };
