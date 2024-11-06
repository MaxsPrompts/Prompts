export class ResponseError extends Error {
    constructor(readonly message: string) {
        super(message);
    }
}
