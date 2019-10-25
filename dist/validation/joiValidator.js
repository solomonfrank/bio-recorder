"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.joiValidator = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

var joiValidator = function joiValidator(data, schema) {
  var message;
  var validationOptions = {
    allowUnknown: true,
    stripUnknown: true,
    abortEarly: false
  };
};

exports.joiValidator = joiValidator;