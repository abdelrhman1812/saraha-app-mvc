import MessageModel from "../../../database/models/message.model.js";

/* Render user`s textarea to send message form other user */
const user = async (req, res) => {
  // await MessageModel.insertMany
  const userId = req.params.id;
  const userData = req.session;
  const success = req.flash("success");

  const validationError = req.flash("validationError");
  const data = req.flash("data");

  res.render("user.ejs", {
    userId,
    success: success.length > 0 ? success[0] : null,
    userData,
    validationError,
    data: data.length > 0 ? data[0] : {},
    session: req.session,
  });
};

/* Send Message */
const sendMessage = async (req, res) => {
  const receiverId = req.params.id;
  const { message } = req.body;
  // console.log(receiverId);

  let messageUser = message.trim();

  const messageSender = new MessageModel({
    message: messageUser,
    receiverId,
  });

  await messageSender.save();

  req.flash("success", "Message Sent");
  return res.redirect(`/user/${receiverId}`);
};

const Logout = async (req, res) => {
  try {
    await new Promise((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) {
          // console.error("Error destroying session:", err);
          return reject(err);
        }
        resolve();
      });
    });
    res.redirect("/login");
  } catch (error) {
    // console.error("Error during logout:", error);
    res.redirect("/error");
  }
};

export { Logout, sendMessage, user };
