import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { schema } from "./form_schema";

export const FormValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;

  if (username && password !== "") {
    try {
      const validatedData = await schema.parseAsync({
        username: req.body.username,
        password: req.body.password,
      });

      console.log(validatedData);

      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Extract the error messages from the z.ZodError instance
        const errorMessages = error.issues.map((issue) => issue.message);

        // Send the error messages as part of the response
        return res.status(400).json({ message: errorMessages.join(" ") });
      }

      next(error);
    }
  } else {
    res.status(401).json({ message: "Username and Password are required" });
  }
};
