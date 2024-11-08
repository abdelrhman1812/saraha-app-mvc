import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });
// console.log('Mongo URI:', process.env.MONGO_URI);

import mongoSession from "connect-mongodb-session";
import cors from "cors";
import express from "express";
import flash from "express-flash";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";
import dbConnections from "./database/db.connections.js";
import homeRouter from "./src/modules/home/home.routes.js";
import loginRouter from "./src/modules/login/login.routes.js";
import messagesRouter from "./src/modules/message/message.routes.js";
import registerRouter from "./src/modules/register/register.routes.js";
import usersRouter from "./src/modules/users/users.routes.js";
import globalErrorHandler from "./src/utils/globalError.js";

// Middleware
const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set up server
const port = process.env.PORT || 3000;

// Database setup
dbConnections();

/* Set up static files */
app.use(express.static(path.join(__dirname, "public")));

/* Set up view engine */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* Session setup */
let MongoDBStore = mongoSession(session);
var store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "mySessions",
});
app.use(
  session({
    secret: process.env.SESSION_SECRET || "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store,
  })
);

/* Flash setup */
app.use(flash());

/* Router */
app.use(homeRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(messagesRouter);
app.use(usersRouter);

/* Error handling */
app.get("*", (req, res, next) => {
  if (req.path !== "/error") {
    return res.render("error.ejs", { session: req.session });
  }
  next();
});

app.use(globalErrorHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
