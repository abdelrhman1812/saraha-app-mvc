import UserModel from "../../../database/models/user.model.js";
import catchError from "../../middleware/catchError.js";
import { comparePassword } from "../../utils/hashAndCompare.js";

/* Render Login Page */
const login = (req, res) => {
  const error = req.flash("error");
  const validationError = req.flash("validationError");
  // console.log(validationError);
  const data = req.flash("data");
  const success = req.flash("success");
  // console.log(success);
  return res.render("login.ejs", {
    error,
    data: data.length > 0 ? data[0] : {},
    validationError,
    success: success.length > 0 ? success[0] : null,
    session: null,
  });
};

/* Login  */
const handleLogin = catchError(async (req, res, next) => {
  const { email, password } = req.body;

  /* Check if the user exists */
  const userIsExist = await UserModel.findOne({ email });

  if (!userIsExist) {
    req.flash("error", "User does not exist");
    req.flash("data", req.body);
    return res.redirect("/login");
  }

  /* Check if password matches */
  const matchPassword = comparePassword({
    plaintext: password,
    hashValue: userIsExist.password,
  });
  if (!matchPassword) {
    req.flash("error", "Invalid password");
    req.flash("data", req.body);
    return res.redirect("/login");
  }

  /* Set User Data in session */

  req.session.user = {
    id: userIsExist._id,
    name: userIsExist.name,
    email: userIsExist.email,
    isLoggedIn: true,
  };

  res.redirect("/messages");
});

export { handleLogin, login };
