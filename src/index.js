export default class ErrorRepository {
    constructor() {
        this.errors = new Map([
            [ 400, 'Bad Request'],
            [ 407, 'Proxy Authentication Required' ],
            [ 418, 'I’m a teapot']
        ]);
    }

    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code)
        }
        return 'Unknown error'
    }
}
