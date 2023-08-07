const userModel = require('../models/userModel');
const { warnNing, error, success } = require('../utils/jsonData');
const { protech } = require('../utils/protech')
var validator = require('validator');

// ตัวอย่างการดึงข้อมูลผู้ใช้ทั้งหมด
const getAllUsers = async (req, res) => {
    try {
        const getAllUsers = await userModel.getAllUsers();
        return res.status(200).json(getAllUsers);
    } catch (error) {
        return res.status(500).json({ error: 'เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้' });
    }
};

// ตัวอย่างการเพิ่มผู้ใช้ใหม่
const createUser = async (req, res) => {

    try {
        const { user_mail, user_name, user_pass } = req.body;
        const safeUserMail = protech(user_mail)
        const safeUserName = protech(user_name)
        const safeUserPass = protech(user_pass)

        if (!validator.isEmail(safeUserMail)) {
            return res.status(400).json(warnNing("email is invalid"));
        }
        if (!user_mail || !user_name || !user_pass) {
            return res.status(400).json(warnNing("data is invalid"));
        }
        if (!safeUserMail || !safeUserName || !safeUserPass) {
            return res.status(400).json(error("attack detected"));
        }

        // check user
        const findMail = await userModel.findMail(user_mail)
        if (findMail.length > 0) {
            return res.status(409).json(warnNing("email is already"));
        }
        // create user
        const user = { user_mail, user_name, user_pass };
        const resultCreateUser = await userModel.createUser(user);
        return res.status(201).json(success("User created successfully", resultCreateUser));

    } catch (error) {
        return res.status(400).json(error("createUser error Please contact the developer."));
    }
};

module.exports = {
    getAllUsers,
    createUser,
};
