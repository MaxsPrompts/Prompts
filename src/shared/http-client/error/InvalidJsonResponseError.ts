export class InvalidJsonResponseError extends Error {
    constructor(readonly message: string) {
        super(message);
    }
}
