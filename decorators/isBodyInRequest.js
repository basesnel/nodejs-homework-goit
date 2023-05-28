const { HttpError } = require("../helpers");

const isBodyInRequest = (scheme) => {
  const func = (req, res, next) => {
    if (!Object.keys(req.body).length) {
      throw HttpError(400, "missing fields");
    } else {
      const { error } = scheme.validate(req.body);
      if (error) {
        next(HttpError(400, error.message));
      }
      next(error);
    }
  };

  return func;
};

module.exports = isBodyInRequest;
