const { User } = require('../../database/models');
const bcrypt = require('bcryptjs');

class UserService {
    static registerUser(req) {
        return new Promise(async (resolve, reject) => {
            try {
                const hashedPassword = await bcrypt.hash(req.password, 10);
                const user = new User({
                    username: req.username,
                    email: req.email,
                    password: hashedPassword,
                });
                const savedUser = user.save();
                resolve(savedUser);
            } catch (error) {
                reject(error);
            }
        })
    }

    static authenticateUser(req) {
        return new Promise(async (resolve, reject) => {
            try {
                let error;
                const user = await User.findOne({ email: req.email });
                if (!user) {
                    error = { status: 404, message: "User not found", type: "custom" }
                    reject(error);
                } else {
                    bcrypt.compare(req.password, user?.password, (err, result) => {
                        if (err) {
                            console.log(err)
                            reject(err)
                        } else if (result) {
                            resolve(user)
                        } else {
                            error = {
                                status: 400,
                                message: "These credentials do not match our records.",
                                type: "custom"
                            }
                            reject(error);
                        }
                    })
                }

            } catch (error) {
                reject(error);
            }
        })
    }

    static getUserById(id) {
        return new Promise(async(resolve, reject) => {
            try {
                const user = await User.findById(id);
                resolve(user);
            } catch (error) {
                reject(error);
            }
        })
    }
}

module.exports = UserService;