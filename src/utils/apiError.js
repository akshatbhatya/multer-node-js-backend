class ApiError extends Error{
    constructor(stack,message,error,status,data){
        super(message)
        this.stack=stack,
        this.message=message,
        this.error=error,
        this.stack=stack,
        this.data=null
        this.status=status

        if(!stack){
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

export default ApiError;