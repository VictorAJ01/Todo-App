import express from "express";

import { SignUpController } from "../controllers/sign_up_controller";
import { LoginController } from "../controllers/login_controller";

export default (router: express.Router) => {
  router.post("/auth/sign_up", SignUpController);
  router.post("/auth/login", LoginController);
};
