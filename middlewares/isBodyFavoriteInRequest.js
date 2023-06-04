const { HttpError } = require("../helpers");

const isBodyFavoriteInRequest = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    throw HttpError(400, "missing field favorite");
  } else {
    next();
  }
};

module.exports = isBodyFavoriteInRequest;
