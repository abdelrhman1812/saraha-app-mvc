import { Router } from "express";
import validate from "../../middleware/validation.js";
import { messageValidation } from "../message/message.validation.js";
import { Logout, sendMessage, user } from "./users.controller.js";

const usersRouter = Router();

usersRouter.get("/user/:id", user);
usersRouter.post("/sendMessage/:id", validate(messageValidation), sendMessage);

usersRouter.get("/logout", Logout);

export default usersRouter;
