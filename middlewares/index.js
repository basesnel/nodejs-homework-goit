const isValidId = require("./isValidId");
const isBodyInRequest = require("./isBodyInRequest");
const isBodyFavoriteInRequest = require("./isBodyFavoriteInRequest");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  isValidId,
  isBodyInRequest,
  isBodyFavoriteInRequest,
  authenticate,
  upload,
};
