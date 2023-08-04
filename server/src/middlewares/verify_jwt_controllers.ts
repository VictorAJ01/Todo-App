import { Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const processEnv = process.env as NodeJS.ProcessEnv;

export const verifyToken = (req: Request) => {
  let token: string | string[] | undefined = req.headers["x-api-key"];

  if (Array.isArray(token)) {
    token = token[0];
  }

  if (!token) {
    throw new Error("Unauthorized: No token provided.");
  }

  try {
    const decoded = jwt.verify(token, processEnv.JWT_SECRET!) as JwtPayload;
    return { id: decoded.id };
  } catch (error) {
    throw new Error("Unauthorized: Invalid token.");
  }
};
