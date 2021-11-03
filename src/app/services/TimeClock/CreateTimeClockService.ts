import { getCustomRepository } from "typeorm";
import { TimeClockRepositories } from "../../repositories/TimeClockRepositories";
import { UsersRepositories } from "../../repositories/UsersRepositories";

interface ITimeClockRequest {
  latitude: string;
  longitude: string;
  altitude: string;
  userId: string; 
}

class CreateTimeClockService {

  async execute({ latitude, longitude, altitude, userId }: ITimeClockRequest){
    const timeClockRepository = getCustomRepository(TimeClockRepositories);
    const usersRepositories = getCustomRepository(UsersRepositories);

    const userExists = usersRepositories.findOne( userId );
    if (!userExists ){ throw new Error("User does't exists!"); }

    const timeClock = timeClockRepository.create({
      latitude,
      longitude,
      altitude,
      userId
    });
    await timeClockRepository.save(timeClock);
    
    return timeClock;
  }
}

export { CreateTimeClockService };