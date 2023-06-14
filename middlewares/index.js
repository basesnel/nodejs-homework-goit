const isValidId = require("./isValidId");
const isBodyInRequest = require("./isBodyInRequest");
const isBodyFavoriteInRequest = require("./isBodyFavoriteInRequest");
const authenticate = require("./authenticate");

module.exports = {
  isValidId,
  isBodyInRequest,
  isBodyFavoriteInRequest,
  authenticate,
};
