import UserModel from "../../../database/models/user.model.js";
import { hashPassword } from "../../utils/hashAndCompare.js";

/* Render Register Page */
const register = (req, res) => {
  const error = req.flash("error");
  const validationError = req.flash("validationError");
  const data = req.flash("data");
  const success = req.flash("success");
  // console.log(success);

  return res.render("register.ejs", {
    error,
    data: data.length > 0 ? data[0] : {},
    validationError,
    success: success.length > 0 ? success[0] : null,
    session: null,
  });
};

/* Register  */
const handleRegister = async (req, res) => {
  let { name, email, password } = req.body;

  let isExist = await UserModel.findOne({ email });

  if (isExist) {
    req.flash("error", "Email Is Already Exist");
    req.flash("data", req.body);
    return res.redirect("/register");
  }

  const hashedPassword = hashPassword({ plaintext: password });

  const user = new UserModel({
    name,
    email,
    password: hashedPassword,
  });

  await user.save();
  req.flash("success", "Registration successful! Please login.");
  // console.log('Success Message:', req.flash('success'));
  // Redirect to login page without delay

  res.redirect("/login");
};

export { handleRegister, register };
