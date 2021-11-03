import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../../repositories/ComplimentsRepositories";

class ListComplimentsService {
  async execute() {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const compliments = await complimentsRepositories.find({
      where: {  active: true  },
      relations: ["UserSender", "UserReciver", "tag"]
    });
    
    return compliments;
  }
}

export { ListComplimentsService };