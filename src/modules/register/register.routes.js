import { Router } from "express";
import protectedMsg from "../../middleware/protectedMsg.js";
import validate from "../../middleware/validation.js";
import { handleRegister, register } from "./register.controller.js";
import { registerValidation } from "./register.validation.js";

const registerRouter = Router();

registerRouter.get("/register", protectedMsg, register);
registerRouter.post(
  "/handleRegister",
  validate(registerValidation, "/register"),
  handleRegister
);

export default registerRouter;
