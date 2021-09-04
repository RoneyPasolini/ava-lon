import { Request, Response } from "express";
import { CreateActivityService } from "../services/CreateActivityService";

class CreateActivityController {
  async handle(req: Request, res: Response) {
    const { title, module_id } = req.body;

    if (!title || !module_id) {
      return res.status(400).send();
    }

    const createActivityService = new CreateActivityService();
    const activity = await createActivityService.execute({
      title,
      module_id,
    });
    if (!activity || !activity.id) {
      return res.status(500).send();
    }

    return res.status(201).json({ quiz: activity });
  }
}

export { CreateActivityController };
