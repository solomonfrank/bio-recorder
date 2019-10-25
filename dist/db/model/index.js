"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _connection = _interopRequireDefault(require("../config/connection"));

var pool = _connection["default"].getInstance();

var Model = function Model(table) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Model);
  (0, _defineProperty2["default"])(this, "insert",
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(params) {
      var fieldNames;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              fieldNames = Object.entries(params);
              _this.count = 1;
              fieldNames.forEach(function (_ref2) {
                var _ref3 = (0, _slicedToArray2["default"])(_ref2, 2),
                    fieldName = _ref3[0],
                    fieldValue = _ref3[1];

                _this.fieldString += "".concat(fieldName, ",");
                _this.valueString += "$".concat(_this.count, ",");

                _this.values.push(fieldValue);

                _this.count += 1;
              });
              _this.fieldString = _this.fieldString.trim().slice(0, -1);
              _this.valueString = _this.valueString.trim().slice(0, -1);
              _this.query = "INSERT INTO ".concat(_this._table, " (").concat(_this.fieldString, ") VALUES (").concat(_this.valueString, ") RETURNING *");
              _context.next = 8;
              return pool;

            case 8:
              _this.client = _context.sent;
              return _context.abrupt("return", _this.client.query("".concat(_this.query), _this.values));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "update",
  /*#__PURE__*/
  function () {
    var _ref4 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(userId, params) {
      var client;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.fieldKey = Object.entries(params);
              _this.count = 1;
              _this.userId = userId;

              _this.fieldKey.forEach(function (_ref5) {
                var _ref6 = (0, _slicedToArray2["default"])(_ref5, 2),
                    key = _ref6[0],
                    value = _ref6[1];

                _this.fieldString += "".concat(key, " = $").concat(_this.count, ",");
                _this.count += 1;

                _this.values.push(value);
              });

              _this.fieldString = _this.fieldString.trimEnd().slice(0, -1);
              _this.sql = "UPDATE ".concat(_this._table, " SET ").concat(_this.fieldString, " WHERE id  = ").concat(_this.userId, " RETURNING *");
              _context2.next = 8;
              return pool;

            case 8:
              client = _context2.sent;
              return _context2.abrupt("return", client.query("".concat(_this.sql), _this.values));

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "delete",
  /*#__PURE__*/
  function () {
    var _ref7 = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee3(userId) {
      var client;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this.id = userId;
              _this.sql = "DELETE FROM ".concat(_this._table, " WHERE id= $1 RETURNING *");
              _context3.next = 4;
              return pool;

            case 4:
              client = _context3.sent;
              return _context3.abrupt("return", client.query("".concat(_this.sql), [_this.id]));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x4) {
      return _ref7.apply(this, arguments);
    };
  }());
  (0, _defineProperty2["default"])(this, "getAllUsers",
  /*#__PURE__*/
  (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4() {
    var client;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _this.sql = "SELECT * FROM ".concat(_this._table);
            _context4.next = 3;
            return pool;

          case 3:
            client = _context4.sent;
            return _context4.abrupt("return", client.query("".concat(_this.sql)));

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  })));
  this._table = table;
  this.client = null;
  this.fieldString = '';
  this.fieldValue = '';
  this.values = [];
  this.valueString = '';
};

var _default = Model;
exports["default"] = _default;