import { getRepository } from "typeorm";
import { User } from "../entities/User";

class ListUsersService {
  async execute() {
    const usersRepository = getRepository(User);

    const users = await usersRepository.find({
      select: ["id", "email", "name", "isTeacher", "isAdmin"],
    });

    return users;
  }
}
export { ListUsersService };
