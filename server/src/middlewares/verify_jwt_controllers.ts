import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const processEnv = process.env as NodeJS.ProcessEnv;

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized: No token provided." });
  }

  jwt.verify(token, processEnv.JWT_SECRET!, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized: Invalid token." });
    }

    // Attach the decoded user data to the request object for later use in the login route
    // req.user = decoded;

    next();
  });
};
