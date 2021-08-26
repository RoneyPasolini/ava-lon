import { getRepository } from "typeorm";
import { Subject } from "../entities/Subject";

class CreateSubjectService {
  async execute(title: string) {
    const subjectsRepository = await getRepository(Subject);

    const subject = await subjectsRepository.create({
      title,
    });

    await subjectsRepository.save(subject);

    return subject;
  }
}

export { CreateSubjectService };
