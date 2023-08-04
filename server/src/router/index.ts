import express, { Router } from "express";
import authentication from "./authentication";
import todoRoutes from "./todo";

const router: Router = express.Router();

export default (): express.Router => {
  authentication(router);
  todoRoutes(router);
  return router;
};
