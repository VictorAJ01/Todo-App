import { Request, Response } from "express";
import { HashPassword } from "../../utils/helper";
import { GetDb } from "../../database";
import { createToken } from "../../middlewares/create_jwt_controller";
import { todoList } from "../../utils/data";

export async function SignUpController(req: Request, res: Response) {
  const { username } = req.body;

  const db = GetDb();
  const userCollection = db.collection("todo_app");

  const userDB = await userCollection.findOne({ username });

  if (userDB) {
    res.status(400).send({ message: "User already exist!" });
  } else {
    const password = HashPassword(req.body.password);
    const newUser = await userCollection.insertOne({
      username,
      password,
      todo: todoList,
    });
    const userId = String(newUser.insertedId);
    const token = createToken(userId);
    res
      .status(201)
      .send({ message: "User created successfully", payload: { token } });
  }
}
