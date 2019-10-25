"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.respondWithWarning = exports.respondWithSuccess = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var respondWithSuccess = function respondWithSuccess(res) {
  var statusCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var message = arguments.length > 2 ? arguments[2] : undefined;
  var additionalFields = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var payload = Array.isArray(additionalFields) ? (0, _toConsumableArray2["default"])(additionalFields) : _objectSpread({}, additionalFields);
  return res.status(statusCode).send({
    success: true,
    message: message,
    payload: payload
  });
};

exports.respondWithSuccess = respondWithSuccess;

var respondWithWarning = function respondWithWarning(res, statusCode, message, additionalFields) {
  return res.status(statusCode).send({
    success: false,
    message: message,
    payload: _objectSpread({}, additionalFields)
  });
};

exports.respondWithWarning = respondWithWarning;