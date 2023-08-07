

const success = (msg, data) => {
    return {
        status: true,
        rank: 1,
        msg: msg,
        data: data
    }
};

const warnNing = (msg) => {
    return {
        status: false,
        rank: 2,
        msg: msg,
        data: "data not found"
    }
};

const error = (msg) => {
    return {
        status: false,
        rank: 3,
        msg: msg,
        data: "data not found"
    }
};

module.exports = {
    success,
    warnNing,
    error
};