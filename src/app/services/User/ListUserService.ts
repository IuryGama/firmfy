import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories"


class ListUserService {
  
  async execute(id: string) {
    const userRepository = getCustomRepository(UsersRepositories);
    
    if (!id) { throw new Error('Insert a valid user');  }

    const user = userRepository.findOne(id);
    
    return user;
  }

}

export { ListUserService };