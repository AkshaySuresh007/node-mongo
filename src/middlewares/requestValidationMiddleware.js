const requestMiddleware = (validatonSchema) => (req, res, next) => {
    validatonSchema
        .validate(req.body, { abortEarly: false })
        .then(() => {
            next();
        })
        .catch((validationError) => {
            const errors = (validationError?.inner || []).reduce((acc, err) => {
                acc[err?.path] = [err?.errors[0]]
                return acc;
            }, {});
            return res.status(404).json({
                message: "The given data was invalid",
                errors: errors
            })
        })
}

module.exports = requestMiddleware;