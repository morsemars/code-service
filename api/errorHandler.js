function errorHandler (err, req, res, next) {

    const errorCode = err.code || 500 // attached error code
    res.status(errorCode);
    res.json({
        "success": false,
        "code": errorCode,
        "message": messages[errorCode]
    });
}

const messages = {
    404: "Page Not Found",
    422: "Request Cannot Be Processed",
    405: "Method Not Allowed",
    500: "Internal Server Error"
}

module.exports = errorHandler