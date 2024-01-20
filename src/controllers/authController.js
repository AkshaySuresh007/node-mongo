const jwt = require('jsonwebtoken');

const { userResource } = require('../resources');
const { AuthService } = require('../services');
const { dotenv } = require('../constants');
const { SECRET } = dotenv;

class AuthController {
    static async register(req, res) {
        try {
            const user = await AuthService.registerUser(req.body);
            return res.success({ user: user }, 'User registered successfull!');
        } catch (error) {
            console.log(error)
            return res.error('Internal server error', 500)
        }
    }

    static async login(req, res) {
        try {
            const user = await AuthService.authenticateUser(req.body);
            const userData = userResource(user);
            if (user) {
                const payload = {
                    id: user?._id,
                    email: user?.email
                }
                const token = await jwt.sign(payload, SECRET);
                return res.success({ user: userData, token: token }, "Authentication completed successfully!");
            }
        } catch (error) {
            console.log(error)
            if (error?.type == "custom") {
                return res.error(error?.message, error?.status);
            }
            return res.error('Internal server error', 500)
        }
    }
}

module.exports = AuthController;