const mysql = require('mysql2/promise');
const xss = require('xss');

const protech = (data) => {
    const oldData = data;
    const safeData = mysql.escape(xss(data)).replace(/'/g, '');
    // console.log("oldData", oldData.length + " | ", "safeData", safeData.length)
    return safeData === oldData ? safeData : false
};

module.exports = {
    protech
};