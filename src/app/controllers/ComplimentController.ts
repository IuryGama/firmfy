import { Request, Response } from "express";
import { CreateComplimentService } from "../services/Compliment/CreateComplimentService";
import { ListComplimentsService } from "../services/Compliment/ListComplimentsService";
import { UpdateComplimentsService } from "../services/Compliment/UpdateComplimentsService";

class ComplimentController {
  async handle(request: Request, response: Response){
    const { tagId, userReciver, message, active} = request.body;
    const { userId } = request;
    
    const createComplimentService = new CreateComplimentService();

    const compliment = await createComplimentService.execute({
      tagId,
      userReciver,
      userSender: userId,
      message,
      active
    });

    return response.status(201).json(compliment);
  }

  async listAll(request: Request, response: Response){
    const listComplimentsService = new ListComplimentsService();
    const compliments = await listComplimentsService.execute();
    return response.status(200).json(compliments);
  }

  async update(request: Request, response: Response){
    const updateComplimentsServices = new UpdateComplimentsService();
    
    const { id } = request.params;
    const { active } = request.body;

    const compliment = await updateComplimentsServices.execute({ id, active });
    return response.status(200).json(compliment);
  }

}

export { ComplimentController };