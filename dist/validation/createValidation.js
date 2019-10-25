"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateUserId = exports.createUserValidation = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _joi = _interopRequireDefault(require("@hapi/joi"));

var _joiValidator = require("./joiValidator");

var _responseHandler = require("../helpers/responseHandler");

var createUserValidation =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res, next) {
    var schema, options, message;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(req.body);
            schema = _joi["default"].object().keys({
              first_name: _joi["default"].string().required(),
              surname: _joi["default"].string().required(),
              birth_date: _joi["default"].string().required()
            });
            options = {
              allowUnknown: true,
              stripUnknown: true,
              abortEarly: false
            };
            _context.prev = 3;
            _context.next = 6;
            return schema.validateAsync(req.body, options);

          case 6:
            return _context.abrupt("return", next());

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](3);
            message = _context.t0.details.map(function (items) {
              return items.message.replace(/['"]/g, '');
            });
            return _context.abrupt("return", (0, _responseHandler.respondWithWarning)(res, 400, message));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 9]]);
  }));

  return function createUserValidation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUserValidation = createUserValidation;

var validateUserId =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res, next) {
    var schema, options, messages;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            schema = _joi["default"].object().keys({
              userId: _joi["default"].number().required()
            });
            options = {
              allowUnknown: true,
              stripUnknown: true,
              abortEarly: false
            };
            _context2.prev = 2;
            _context2.next = 5;
            return schema.validateAsync(req.params, options);

          case 5:
            return _context2.abrupt("return", next());

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](2);
            messages = _context2.t0.details.map(function (items) {
              return items.message.replace(/['"]/g, '');
            });
            return _context2.abrupt("return", (0, _responseHandler.respondWithWarning)(res, 400, messages));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 8]]);
  }));

  return function validateUserId(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.validateUserId = validateUserId;