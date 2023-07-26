import jwt, { Algorithm } from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const processEnv = process.env as NodeJS.ProcessEnv;

const maxAge = 24 * 60 * 60 * 1000;

export const createToken = (id: string) => {
  return jwt.sign({ id }, processEnv.JWT_SECRET as Algorithm, {
    expiresIn: maxAge,
  });
};
