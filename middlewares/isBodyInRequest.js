const { HttpError } = require("../helpers");

const isBodyInRequest = (req, res, next) => {
  if (!Object.keys(req.body).length) {
    throw HttpError(400, "Missing fields");
  } else {
    next();
  }
};

module.exports = isBodyInRequest;
