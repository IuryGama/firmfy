import { Repository, EntityRepository } from "typeorm";
import { TimeClock } from "../entities/TimeClock";

@EntityRepository(TimeClock)
class TimeClockRepositories extends Repository<TimeClock>{}

export { TimeClockRepositories }