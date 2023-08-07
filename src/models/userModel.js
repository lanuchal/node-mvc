const db = require('../config/db.config');

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM user', (err, results) => {
            if (err) {
                console.error(err);
                reject('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้');
            }
            resolve(results);
        });
    });
};

const createUser = (user) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO user SET ?', user, (err, results) => {
            if (err) {
                console.error(err);
                reject('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้');
            }
            resolve(results);
        });
    });
};

const findMail = (email) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM user WHERE `user_mail` = ?', email, (err, results) => {
            if (err) {
                console.error(err);
                reject('เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้');
            }
            resolve(results);
        });
    });

};

module.exports = {
    getAllUsers,
    createUser,
    findMail,
};
