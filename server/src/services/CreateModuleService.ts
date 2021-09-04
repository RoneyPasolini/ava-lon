import { getRepository } from "typeorm";
import { Module } from "../entities/Module";
import { Subject } from "../entities/Subject";

interface CreateModuleData {
  title: string;
  subject_id: string;
}

class CreateModuleService {
  async execute(createModuleData: CreateModuleData) {
    const modulesRepository = await getRepository(Module);
    const subjectsRepository = await getRepository(Subject);

    const { title, subject_id } = createModuleData;

    const subject = await subjectsRepository.findOne(subject_id);
    if (!subject) {
      return null;
    }

    const module = await modulesRepository.create({
      title,
      subject,
    });

    await modulesRepository.save(module);

    return module;
  }
}

export { CreateModuleService };
