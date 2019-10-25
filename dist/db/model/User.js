"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _index = _interopRequireDefault(require("./index"));

var User =
/*#__PURE__*/
function (_Model) {
  (0, _inherits2["default"])(User, _Model);

  function User() {
    var modelType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'users';
    (0, _classCallCheck2["default"])(this, User);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(User).call(this, modelType));
  }

  (0, _createClass2["default"])(User, null, [{
    key: "init",
    value: function init() {
      return new User();
    }
  }]);
  return User;
}(_index["default"]);

var _default = User;
exports["default"] = _default;