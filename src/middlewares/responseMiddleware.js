function success(data, message, status = 200) {
    const resObj = {
        success: true,
        message: message || "Success",
        data: data || null,
    }

    this.status(status).json(resObj);
}

function error(message, status = 400) {
    const resObj = {
        success: false,
        message,
        data: null,
    }

    this.status(status).json(resObj);
}

function responseMiddleware(req, res, next) {
    res.success = success;
    res.error = error;
    next();
}

module.exports = responseMiddleware;