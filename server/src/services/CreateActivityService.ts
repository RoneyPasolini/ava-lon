import { getRepository } from "typeorm";
import { Activity } from "../entities/Activity";
import { Module } from "../entities/Module";

interface CreateActivityData {
  title: string;
  module_id: string;
  deadline?: Date;
}

class CreateActivityService {
  async execute(createActivityData: CreateActivityData) {
    const activitiesRepository = await getRepository(Activity);
    const modulesRepository = await getRepository(Module);

    const { title, module_id, deadline } = createActivityData;

    const module = await modulesRepository.findOne(module_id);

    if (!module) {
      return null;
    }

    const activity = await activitiesRepository.create({
      title,
      module,
      deadline,
    });

    await activitiesRepository.save(activity);

    return activity;
  }
}

export { CreateActivityService };
