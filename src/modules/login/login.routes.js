import { Router } from "express";
import protectedMsg from "../../middleware/protectedMsg.js";
import validate from "../../middleware/validation.js";
import { handleLogin, login } from "./login.controller.js";
import { loginValidation } from "./login.validation.js";

const loginRouter = Router();

loginRouter.get("/login", protectedMsg, login);

loginRouter.post(
  "/handleLogin",
  validate(loginValidation, "/login"),
  handleLogin
);

export default loginRouter;
