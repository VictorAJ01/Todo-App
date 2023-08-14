import express from "express";
import { GetUserDetailsController } from "../controllers/get_user_details_controller";
import { GetTodo } from "../controllers/todo/get_todo_controller";
import { AddTodo } from "../controllers/todo/add_todo_controller";

export default (router: express.Router) => {
  router.get("/get-user-details", GetUserDetailsController);
  router.get("/todo", GetTodo);
  router.post("/add-todo", AddTodo);
};
