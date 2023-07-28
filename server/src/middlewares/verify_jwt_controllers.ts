import { Request } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const processEnv = process.env as NodeJS.ProcessEnv;

export const verifyToken = (req: Request) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    throw new Error("Unauthorized: No token provided.");
  }

  const decoded = jwt.verify(token, processEnv.JWT_SECRET!);

  if (decoded === "string") {
    throw new Error("Invalid");
  }
  return { id: decoded };
};
