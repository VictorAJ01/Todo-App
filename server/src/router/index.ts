import express, { Router } from "express";
import authentication from "./authentication";

const router: Router = express.Router();

export default (): express.Router => {
  authentication(router);
  return router;
};
