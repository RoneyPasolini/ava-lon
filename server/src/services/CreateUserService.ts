import { hash } from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../entities/User";

interface CreateUserData {
  email: string;
  name: string;
  password: string;
  isTeacher: boolean;
  isAdmin: boolean;
}

class CreateUserService {
  async execute({
    email,
    name,
    password,
    isTeacher = false,
    isAdmin = false,
  }: CreateUserData) {
    const passwordHash = await hash(password, 8);
    const usersRepository = await getRepository(User);

    const user = await usersRepository.create({
      name,
      email,
      password: passwordHash,
      isAdmin,
      isTeacher,
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };
