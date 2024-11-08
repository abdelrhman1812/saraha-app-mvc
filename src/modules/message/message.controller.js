import QRCode from "qrcode";
import MessageModel from "../../../database/models/message.model.js";

/* Render Message For User If Id in Session and Shear Url */
const messages = async (req, res) => {
  let qrCodeUrl;
  const userData = req.session;
  // console.log(userData.user?.name)
  const url = `${req.protocol}://${req.get("host")}/user/${userData.user.id}`;
  // console.log(url);

  await QRCode.toDataURL(url)
    .then((url) => {
      qrCodeUrl = url;
      // console.log(url)
    })
    .catch((err) => {
      console.error(err);
    });

  const messages = await MessageModel.find({ receiverId: userData.user.id });

  res.render("messages.ejs", {
    messages,
    qrCodeUrl,
    url,
    userData,
    session: req.session,
  });
};

export { messages };
