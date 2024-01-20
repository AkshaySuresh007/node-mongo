const { requestMiddleware, responseMiddleware, authMiddleware } = require("../src/middlewares");

const middleware = (middlewareNames = [], validationSchema = null) => {
    let middlewares = [];
    const middlewareList = {
        'validation': requestMiddleware,
        'response': responseMiddleware,
        'auth': authMiddleware,
    };

    middlewareNames.forEach((name) => {
        if (name === 'validation') {
            if (!validationSchema) {
                console.warn("With validation middleware, a validation schema is required");
            }
            middlewares.push(middlewareList[name](validationSchema));
        } else {
            middlewares.push(middlewareList[name]);
        }
    });

    return middlewares.length > 0 ? middlewares : null;
};

module.exports = middleware;