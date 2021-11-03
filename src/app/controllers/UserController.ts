import { Request, Response } from "express";

import { CreateUserService } from "../services/User/CreateUserService";
import { ListAllUserService } from "../services/User/ListAllUserService";
import { ListUserService } from "../services/User/ListUserService";

class UserController { 

  async create(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({name, email, admin, password});

    return response.json(user);
  }
  
  async listAll(request: Request, response: Response) {
    const listUsersService = new ListAllUserService();
    const users = await listUsersService.execute();
    return response.status(200).json(users);
  }

  async listUser(request: Request, response: Response) {
    const { id } = request.params;

    const listUserService = new ListUserService();
    const user = await listUserService.execute(id);   

    const { name, email, admin } = user;
    return response.status(200).json({
      id,
      name,
      email,
      admin
    });
    
  }

}

export { UserController };