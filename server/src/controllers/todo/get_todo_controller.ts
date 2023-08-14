import { Request, Response } from "express";
import { FindUser } from "../find_user";

export async function GetTodo(req: Request, res: Response) {
  try {
    const userDetails = await FindUser(req);

    if (userDetails) {
      const payload = { todo: userDetails.todo };
      return res.status(200).json({ payload });
    } else {
      throw new Error("No User Found");
    }
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
}
