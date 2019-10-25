"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _pg = require("pg");

var _constant = require("../../constant");

var connectionString = _constant.DATABASE_LOCAL_URL || _constant.DATABASE_PROD_URL;

var Db = function Db() {
  (0, _classCallCheck2["default"])(this, Db);
  this.conn = new _pg.Pool({
    connectionString: connectionString
  });
  console.log('database successfully connected');
  return this.conn;
};

(0, _defineProperty2["default"])(Db, "getInstance",
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!Db.pool) {
            Db.pool = new Db();
          }

          return _context.abrupt("return", Db.pool);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
(0, _defineProperty2["default"])(Db, "creatUsersTable",
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee2() {
  return _regenerator["default"].wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          Db.createTableQuery = "\n        CREATE TABLE IF NOT EXISTS\n        users(\n        id SERIAL PRIMARY KEY,\n        first_name VARCHAR(120) NOT NULL,\n        surname VARCHAR(120) NOT NULL,\n        birth_date VARCHAR(120) NOT NULL,\n        attribute TEXt[],\n        created_at TIMESTAMP\n        )";
          _context2.next = 3;
          return Db.getInstance();

        case 3:
          Db.client = _context2.sent;
          _context2.next = 6;
          return Db.client.query("".concat(Db.createTableQuery));

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));
(0, _defineProperty2["default"])(Db, "creatUsersAttributeTable",
/*#__PURE__*/
(0, _asyncToGenerator2["default"])(
/*#__PURE__*/
_regenerator["default"].mark(function _callee3() {
  return _regenerator["default"].wrap(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          Db.createTableQuery = "\n        CREATE TABLE IF NOT EXISTS\n        attributes(\n        id SERIAL PRIMARY KEY,\n        color VARCHAR(120) NOT NULL,\n        height VARCHAR(120) NOT NULL,\n        weight VARCHAR(120) NOT NULL,\n        user_id INT REFERENCES users(id)\n        );";
          _context3.next = 3;
          return Db.getInstance();

        case 3:
          Db.client = _context3.sent;
          _context3.next = 6;
          return Db.client.query("".concat(Db.createTableQuery));

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  }, _callee3);
})));
var _default = Db;
exports["default"] = _default;