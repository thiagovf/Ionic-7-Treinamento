export class PrecoRangeError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PrecoRangeError";
    }
}