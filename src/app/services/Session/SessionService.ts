import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { compare } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import authConfig from "../../../config/authConfig";


interface ISessionRequest {
  email: string;
  password: string;
}

class SessionService {
  async execute({email, password}: ISessionRequest){
    const usersRepositories = getCustomRepository(UsersRepositories)
    
    const user = await usersRepositories.findOne({ email });
    if(!user){ throw new Error("Email/Password incorrect"); }

    const passwordMatch = await compare(password, user.password);
    if(!passwordMatch){ throw new Error("Email/Password incorrect"); }

    const token = jwt.sign(
      { id: user.id }, authConfig.secret, {
        subject: user.id,
        expiresIn: authConfig.expiresIn
      }
    );
    
    return token
  }
}

export { SessionService };