import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../../repositories/ComplimentsRepositories"


interface IUpdateComplimentRequire{
  id: string;
  active: boolean;
}

class UpdateComplimentsService {

  async execute({id, active}: IUpdateComplimentRequire) {
    const complimentsRepository = getCustomRepository(ComplimentsRepositories);
    const compliment = await complimentsRepository.findOne({
      where: { id: id }
    });
    compliment.active = active;
    await complimentsRepository.save(compliment);
    return compliment;
  }

}

export { UpdateComplimentsService }