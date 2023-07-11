import { Request, Response } from "express";
import { HashPassword } from "../utils/helper";
import { GetDb } from "../database";

export async function SignUpController(req: Request, res: Response) {
  const { username } = req.body;

  const db = GetDb();
  const userCollection = db.collection("todo_app");

  const userDB = await userCollection.findOne({ username });
  if (userDB) {
    res.status(400).send({ msg: "User already exist!" });
  } else {
    const password = HashPassword(req.body.password);
    const newUser = await userCollection.insertOne({ username, password });
    console.log("🚀 ~ file: auth.js:19 ~ router.post ~ newUser:", newUser);
    res.status(201).send({ msg: "User created successfully" });
  }
}
