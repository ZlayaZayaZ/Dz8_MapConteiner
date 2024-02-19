import ErrorRepository from '../index';

describe('ErrorRepository', () => {
    test.each([
        [400, 'Bad Request'],
        [407, 'Proxy Authentication Required'],
        [418, 'I’m a teapot'],
        [500, 'Unknown error'],
      ])('test class ErrorRepository', (code, expected) => {
        const map = new ErrorRepository();
        expect(map.translate(code)).toBe(expected);
      });
})