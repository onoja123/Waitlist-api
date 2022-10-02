class AppError extends Error{
    constructor(messae, statusCode){
        super(message)

        this.statusCode = this.statusCode
        this.status = `${this.statusCode}`.startsWith('4') ? "failed" : "error"

        this.operational = undefined

        error.captureStackTrace(this, this.constructor)
    }
}

module.exports = AppError