"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchAllUsers = exports.deleteUser = exports.editUser = exports.createUser = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../db/model/User"));

var _responseHandler = require("../helpers/responseHandler");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var createUser =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(req, res) {
    var _ref2, rows, attribute;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _User["default"].init().insert(_objectSpread({}, req.body, {
              created_at: new Date()
            }));

          case 3:
            _ref2 = _context.sent;
            rows = _ref2.rows;
            attribute = rows[0]['attribute'].map(function (item) {
              return JSON.parse(item);
            });
            rows[0]['attribute'] = attribute;
            return _context.abrupt("return", (0, _responseHandler.respondWithSuccess)(res, 201, 'user successfully recorded', rows));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", (0, _responseHandler.respondWithSuccess)(res, 500, _context.t0.stack));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createUser = createUser;

var editUser =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(req, res) {
    var userId, _ref4, rows;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            userId = req.params.userId;
            _context2.next = 3;
            return _User["default"].init().update(userId, req.body)["catch"](function (err) {
              return (0, _responseHandler.respondWithSuccess)(res, 500, 'Internal server error');
            });

          case 3:
            _ref4 = _context2.sent;
            rows = _ref4.rows;
            return _context2.abrupt("return", (0, _responseHandler.respondWithSuccess)(res, 202, 'user successfully updated', rows));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function editUser(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.editUser = editUser;

var deleteUser =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(req, res) {
    var userId, _ref6, rows;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            userId = req.params.userId;
            _context3.next = 3;
            return _User["default"].init()["delete"](userId)["catch"](function (err) {
              return (0, _responseHandler.respondWithSuccess)(res, 500, 'Internal server error');
            });

          case 3:
            _ref6 = _context3.sent;
            rows = _ref6.rows;
            return _context3.abrupt("return", (0, _responseHandler.respondWithSuccess)(res, 202, 'user successfully deleted', rows));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function deleteUser(_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;

var fetchAllUsers =
/*#__PURE__*/
function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(req, res) {
    var _ref8, rows, copy;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _User["default"].init().getAllUsers()["catch"](function (err) {
              return (0, _responseHandler.respondWithSuccess)(res, 500, 'Internal server error');
            });

          case 2:
            _ref8 = _context4.sent;
            rows = _ref8.rows;
            copy = [];
            rows.forEach(function (item) {
              var name = Object.keys(item);

              if (name[4] === 'attribute') {
                var childElem = item['attribute'].map(function (val) {
                  var newMap = JSON.parse(val);
                  return newMap;
                });
                item['attribute'] = childElem;
                copy.push(item);
              } else {
                copy.push(item);
              }
            });
            return _context4.abrupt("return", (0, _responseHandler.respondWithSuccess)(res, 202, 'users successfully fetched', copy));

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function fetchAllUsers(_x7, _x8) {
    return _ref7.apply(this, arguments);
  };
}();

exports.fetchAllUsers = fetchAllUsers;