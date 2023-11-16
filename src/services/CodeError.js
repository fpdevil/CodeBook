export default class CodeError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}
