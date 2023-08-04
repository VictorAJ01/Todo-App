import { Request, Response } from "express";
import { verifyToken } from "../middlewares/verify_jwt_controllers";
import { GetDb } from "../database";
import { todoList } from "../utils/data";
import { ObjectId } from "mongodb";

export async function GetUserDetailsController(req: Request, res: Response) {
  try {
    const { id } = verifyToken(req);

    const userId = new ObjectId(id);

    const db = GetDb();
    const userCollection = db.collection("todo_app");

    const userDetails = await userCollection.findOne({ _id: userId });

    if (userDetails) {
      delete userDetails.password;
    }

    const payload = { user: userDetails, todo: todoList };

    res.status(200).json({ payload });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
}
