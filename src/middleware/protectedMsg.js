const protectedMsg = (req, res, next) => {
  if (req.session?.user) {
    return res.redirect("messages");
  }
  next();
};

export default protectedMsg;
