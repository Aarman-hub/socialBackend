import HTTP_STATUS from 'http-status-codes';

export interface MErrorResponse{
    message: string;
    statusCode: number;
    status: string;
    serializeErrors(): MError;
}
export interface  MError{
    message: string;
    statusCode: number;
    status: string;
}

export abstract class CustomError extends Error{
    abstract statusCode: number;
    abstract status: string;

    constructor(message: string){
        super(message)
    }

    serializeErrors(): MError{
        return{
            message: this.message,
            statusCode: this.statusCode,
            status: this.status
        }
    }
}

export class JoiRequestValidationError extends CustomError{
    statusCode = HTTP_STATUS.BAD_REQUEST;
    status = 'error';

    constructor(message: string){
        super(message);
    }
}

export class BadRequestError extends CustomError{
    statusCode = HTTP_STATUS.BAD_REQUEST;
    status = 'error';

    constructor(message: string){
        super(message);
    }
}

export class NotFoundError extends CustomError{
    statusCode = HTTP_STATUS.NOT_FOUND;
    status = 'error';

    constructor(message: string){
        super(message);
    }
}
export class UnauthorizedError extends CustomError{
    statusCode = HTTP_STATUS.UNAUTHORIZED;
    status = 'error';

    constructor(message: string){
        super(message);
    }
}

export class FileToLargeError extends CustomError{
    statusCode = HTTP_STATUS.REQUEST_TOO_LONG;
    status = 'error';

    constructor(message: string){
        super(message);
    }
}

export class ServerError extends CustomError{
    statusCode = HTTP_STATUS.SERVICE_UNAVAILABLE;
    status = 'error';

    constructor(message: string){
        super(message);
    }
}