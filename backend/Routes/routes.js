const express = require('express');
const { createStudentControllerFn, loginUserControllerFn } = require('../src/student/studentController.js');
const router = express.Router();

router.route('/student/login').post(loginUserControllerFn);
router.route('/student/create').post(createStudentControllerFn);

module.exports = router;
