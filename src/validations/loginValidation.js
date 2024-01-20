const Yup = require('yup');

const loginValidationSchema = Yup.object().shape({
    email: Yup
        .string()
        .email("Invalid email format")
        .required("The email field is required"),
    password: Yup.string().required("The password field is required"),
})

module.exports = loginValidationSchema;