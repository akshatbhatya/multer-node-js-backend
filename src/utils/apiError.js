class ApiError extends Error{
    constructor(stack,message,error,status){
        super(message)
        this.stack=stack,
        this.message=message,
        this.error=error,
        this.stack=stack

        if(!stack){
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

export default ApiError;