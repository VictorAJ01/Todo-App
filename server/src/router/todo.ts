import express from "express";
import { GetUserDetailsController } from "../controllers/get_user_details_controller";

export default (router: express.Router) => {
  router.get("/get-user-details", GetUserDetailsController);
};
