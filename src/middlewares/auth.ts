import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import authConfig from '../config/authConfig';

interface IPayload {
  sub: string;
}

const authMiddleware = (request: Request, response: Response, next: NextFunction) => {
  const authToken = request.headers.authorization;

  if (!authToken) { return response.status(401).end();  }

  const [ , token] = authToken.split(' ');
  try {
    const { sub } = jwt.verify(token, authConfig.secret) as IPayload;

    request.userId = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }

}

export { authMiddleware };