const jwt = require('jsonwebtoken');
const util = require('util');

const { dotenv } = require('../constants');
const { SECRET } = dotenv;
const { AuthService } = require('../services');

const authMiddleware = async (req, res, next) => {
    try {
        let token;
        const getToken = req.get("Authorization");
        if (getToken && getToken.startsWith("Bearer")) {
            token = getToken.split(' ')[1];
        }
        if (!token) {
            return res.error("Unauthenticated", 401);
        }
        const decodedToken = await util.promisify(jwt.verify)(token, SECRET);
        const user = await AuthService.getUserById(decodedToken?.id);
        if (!user) {
            return res.error("User with given token does not exists");
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = authMiddleware;