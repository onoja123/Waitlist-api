class AppError extends Error{
    constructor(message, statusCode){
        super(message)

        this.statusCode = this.statusCode
        this.status = `${this.statusCode}`.startsWith('4') ? "failed" : "error"

        this.operational = undefined

        Error.captureStackTrace(this, this.constructor)
    }
}

module.exports = AppError