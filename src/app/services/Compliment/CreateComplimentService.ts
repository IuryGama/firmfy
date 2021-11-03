import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface IComplimentRequest {
  tagId: string;
  userSender: string;
  userReciver: string;
  message: string;
  active?: boolean;
}

class CreateComplimentService {
  async execute({tagId, userReciver, userSender, message, active}: IComplimentRequest){
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    if (userSender === userReciver) {
      throw new Error('Incorrect user reciver');
    }

    const userReciverExists = await usersRepositories.findOne(userReciver);
    if (!userReciverExists){
      throw new Error('User reciver does not exists');
    }

    const compliment = complimentsRepositories.create( {
      tagId,
      userReciver,
      userSender,
      message,
      active
    });

    await complimentsRepositories.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };