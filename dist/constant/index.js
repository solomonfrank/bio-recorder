"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATABASE_PROD_URL = exports.DATABASE_LOCAL_URL = exports.PORT = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var _process$env = process.env,
    PORT = _process$env.PORT,
    DATABASE_LOCAL_URL = _process$env.DATABASE_LOCAL_URL,
    DATABASE_PROD_URL = _process$env.DATABASE_PROD_URL;
exports.DATABASE_PROD_URL = DATABASE_PROD_URL;
exports.DATABASE_LOCAL_URL = DATABASE_LOCAL_URL;
exports.PORT = PORT;