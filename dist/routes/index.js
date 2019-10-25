"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _createValidation = require("../validation/createValidation");

var _userController = require("../controllers/userController");

var router = (0, _express.Router)();
router.post('/api/v1/user/create', _createValidation.createUserValidation, _userController.createUser);
router.put('/api/v1/user/edit/:userId', _createValidation.validateUserId, _userController.editUser);
router["delete"]('/api/v1/user/delete/:userId', _createValidation.validateUserId, _userController.deleteUser);
router.get('/api/v1/users', _userController.fetchAllUsers);
var _default = router;
exports["default"] = _default;