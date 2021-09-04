import { Request, Response } from "express";
import { CreateModuleService } from "../services/CreateModuleService";

class CreateModuleController {
  async handle(req: Request, res: Response) {
    const { title, subject_id } = req.body;

    if (!title || !subject_id) {
      return res.status(400).send();
    }

    const createModuleService = new CreateModuleService();
    const module = await createModuleService.execute({
      title,
      subject_id,
    });

    if (!module || !module.id) {
      return res.status(500).send();
    }

    return res.status(201).json({ module: module });
  }
}

export { CreateModuleController };
