import { Request, Response } from "express";
import { ComparePassword } from "../utils/helper";
import { GetDb } from "../database";

export async function LoginController(req: Request, res: Response) {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).send({ msg: "Username and password required" });

  const db = GetDb();
  const userCollection = db.collection("todo_app");

  const userDB = await userCollection.findOne({ username });

  if (!userDB) res.status(401).send({ msg: "User doesn't exist!" });

  const isValid = ComparePassword(password, (userDB as any).password);

  if (isValid) {
    req.cookies = userDB;
    res.status(200).send("Logged in successfully");
  } else {
    return res.send(401);
  }
}
