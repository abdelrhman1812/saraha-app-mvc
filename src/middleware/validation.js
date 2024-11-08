const validate = (schema, url) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    const defaultUrl = `/user/${req.params.id}`;
    if (!error) {
      next();
    } else {
      let errorMsg = error.details.map((err) => err?.message);
      req.flash("validationError", errorMsg);
      req.flash("data", req.body);

      return res.redirect(url || defaultUrl);
    }
  };
};

export default validate;
