import { Request, Response, NextFunction } from "express";



const ensureAdmin = (request: Request, response: Response, next: NextFunction) => {
  const admin = true;
  (admin) ? next() : response.status(401).json({ error: "Unauthorized" });
}

export { ensureAdmin };