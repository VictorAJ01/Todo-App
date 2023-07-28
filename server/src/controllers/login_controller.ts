import { Request, Response } from "express";
import { ComparePassword } from "../utils/helper";
import { GetDb } from "../database";

export async function LoginController(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).send({ msg: "Username and password required" });

    const db = GetDb();
    const userCollection = db.collection("todo_app");

    const userDB = await userCollection.findOne({ username });

    if (!userDB) res.status(401).send({ msg: "User doesn't exist!" });

    const isValid = ComparePassword(password, (userDB as any).password);

    if (isValid) {
      // const userId = String(userDB?._id);
      // const token = createToken(userId);
      return res.status(200).send({ msg: "Logged in successfully" });
    }
    return res.send(401);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
}
