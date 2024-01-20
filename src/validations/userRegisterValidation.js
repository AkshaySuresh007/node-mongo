const Yup = require('yup');
const { User } = require('../../database/models');

const userRegisterValidationSchema = Yup.object().shape({
    username: Yup.string().required('The username field is required'),
    email: Yup.string()
        .required('The email field is required')
        .email("Invalida email format")
        .test({
            name: 'checkIfEmailAlreadyExists',
            message: "The ${path} already exists",
            test: async function (value) {
                const user = await User.find({ email: value });
                return !user;
            }
        }),
    password: Yup.string().required('The password field is required'),
});

module.exports = userRegisterValidationSchema;
