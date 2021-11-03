import { Request, response, Response } from "express";
import { CreateTagService } from "../services/Tag/CreateTagService";  
import { ListTagService } from "../services/Tag/ListTagService";


class TagController {

  async handle(request: Request, response: Response) {
    const createTagService = new CreateTagService();    
    const { name } = request.body;
    const tag = await createTagService.execute({name});

    return response.status(201).json(tag);
  }

  async listAll(request: Request, response: Response) {
    const listTagService = new ListTagService();
    const tag = await listTagService.execute();

    return response.status(200).json(tag);
  }

}

export { TagController }