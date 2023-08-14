import { Request, Response } from "express";
import { FindUser } from "../find_user";
import { GetDb } from "../../database";
import { ObjectId } from "mongodb";
import { TodoPayload } from "../../utils/types";

export async function AddTodo(req: Request, res: Response) {
  try {
    const { title } = req.body;
    const userDetails = await FindUser(req);

    if (userDetails) {
      const { todo } = userDetails;

      const userId = new ObjectId(userDetails._id);

      if (todo.some((todoItem: TodoPayload) => todoItem.title === title)) {
        res.status(400).json({ message: "Todo already exists" });
      }

      const db = GetDb();
      const userCollection = db.collection("todo_app");

      const newTodo = {
        id: new ObjectId(),
        title: title,
      };

      await userCollection.updateOne(
        { _id: userId },
        { $push: { todo: newTodo } }
      );

      const payload = { todo: userDetails.todo };
      return res
        .status(200)
        .json({ message: "Todo added successfully", payload });
    } else {
      throw new Error("No User Found");
    }
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
}
