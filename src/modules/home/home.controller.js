const home = (req, res) => {
  res.render("index.ejs", { session: req.session });
};

export { home };
