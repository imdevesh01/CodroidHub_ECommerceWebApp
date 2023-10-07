const notFoundHandler = (req, res, next) => {
    const error = new Error(`Not Found: ${req.originalUrl}`);
    res.status(404)
    next(error);
}

const errorHandler = (error, req, res, next) => {

    let statusCode = res.statusCode === 200 ? 500 : res.statusCode

    let errorMessage = error.message

    res.status(statusCode)
        .json({
            errorMessage,
            stack: error.stack
        })
}

export { notFoundHandler, errorHandler }