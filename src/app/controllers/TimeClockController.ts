import {Request, Response} from "express";
import { CreateTimeClockService } from "../services/TimeClock/CreateTimeClockService";

class TimeClockController {

  async create(request: Request, response: Response){
    const { longitude, latitude, altitude } = request.body;
    const { userId } = request;

    const createTimeClockService = new CreateTimeClockService();
    const timeClock = await createTimeClockService.execute({
      longitude,
      latitude,
      altitude,
      userId: userId
    });

    return response.status(201).json(timeClock);
  }


}

export { TimeClockController };