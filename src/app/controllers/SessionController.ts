import { Request, Response } from "express";
import { SessionService } from "../services/Session/SessionService";

class SessionUserController {

  async handle(request: Request, response: Response){
    const { email, password } = request.body

    const sessionUserService = new SessionService()
    

    const token = await sessionUserService.execute({
      email,
      password
    });

    return response.status(200).json({  email: email, token: token  });
  }
}

export { SessionUserController }