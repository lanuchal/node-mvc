const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// เส้นทางสำหรับดึงข้อมูลผู้ใช้ทั้งหมด
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);

module.exports = router;
