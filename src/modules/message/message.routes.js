import { Router } from "express";
import auth from "../../middleware/auth.js";
import { messages } from "./message.controller.js";



const messagesRouter = Router();

messagesRouter.get('/messages', auth, messages)

export default messagesRouter;