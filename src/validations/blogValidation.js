const Yup = require('yup');

const blogValidationSchema = Yup.object().shape({
    title: Yup.string().required("The title field is required"),
    snippet: Yup.string().required("The snippet field is required"),
    body: Yup.string().required("The body field is required"),
})

module.exports = blogValidationSchema;