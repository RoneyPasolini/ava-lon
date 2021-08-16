import { getRepository } from "typeorm";
import { User } from "../entities/User";

class ListUsersService {
  async execute() {
    const usersRepository = getRepository(User);

    const users = await (
      await usersRepository.find()
    ).map((user) => {
      const { name, email, isAdmin, isTeacher } = user;
      return {
        name,
        email,
        isAdmin,
        isTeacher,
      };
    });

    return users;
  }
}
export { ListUsersService };
