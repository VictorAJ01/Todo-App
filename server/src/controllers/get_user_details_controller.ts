import { Request, Response } from "express";
import { FindUser } from "./find_user";

export async function GetUserDetailsController(req: Request, res: Response) {
  try {
    const userDetails = await FindUser(req);

    if (userDetails) {
      const { _id, username, todo } = userDetails;
      const payload = { user: { _id, username }, todo: todo };
      res.status(200).json({ payload });
    } else {
      throw new Error("No User Found");
    }
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
}
