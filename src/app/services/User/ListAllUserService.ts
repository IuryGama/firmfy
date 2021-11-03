import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";

class ListAllUserService {
  async execute() {
    const userRepository = getCustomRepository(UsersRepositories);
    const users = await userRepository.find();
    return users
  }
}

export { ListAllUserService };