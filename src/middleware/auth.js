import UserModel from "../../database/models/user.model.js";

const auth = async (req, res, next) => {
  if (!req.session?.user) {
    req.flash("error", "Please Login ");
    return res.redirect("/login");
  }

  const { id } = req.session.user;
  const user = await UserModel.findOne({ _id: id });

  if (!user) {
    req.flash("error", "Email Is Not Exist");
    return res.redirect("/login");
  }

  req.user = user;

  return next();
};

export default auth;
