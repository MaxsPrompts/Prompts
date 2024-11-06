export type ConnectionErrorResponse = {
    message: string;
};

export class ConnectionError extends Error {
    constructor(readonly response: ConnectionErrorResponse) {
        super(response.message);
    }
}
