import express from "express";

import { SignUpController } from "../controllers/auth/sign_up_controller";
import { LoginController } from "../controllers/auth/login_controller";
import { FormValidation } from "../middlewares/auth_middleware";

export default (router: express.Router) => {
  router.post("/auth/sign_up", FormValidation, SignUpController);
  router.post("/auth/login", FormValidation, LoginController);
};
