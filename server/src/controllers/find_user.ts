import { Request } from "express";
import { ObjectId } from "mongodb";
import { GetDb } from "../database";
import { verifyToken } from "../middlewares/verify_jwt_controllers";

export async function FindUser(req: Request) {
  const { id } = verifyToken(req);

  const userId = new ObjectId(id);

  const db = GetDb();
  const userCollection = db.collection("todo_app");

  const userDetails = await userCollection.findOne({ _id: userId });

  return userDetails;
}
