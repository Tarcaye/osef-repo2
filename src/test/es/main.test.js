import {rpn} from "../../main/es/main";

describe('NPI', () => {
    describe('+', () => {
        test.each([
            [`0 1 +`, 1],
            [`1 0 +`, 1],
            [`1 1 +`, 2],
            [`1 2 3 + +`, 6],
            [`5 9 + 7 +`, 21],
            [`4 3 2 5 + + 7 + + 10 5 + 2 2 + 14 + + + 1 +`, 55]
        ])(
            "%p = %p",
            (operation, expectedResult) => {
                expect(rpn.additions(operation)).toEqual(expectedResult);
            });
    });
    describe('-', () => {
        test.each([
            [`1 0 -`, 1],
            [`0 1 -`, -1],
            [`1 1 -`, 0],
            [`1 3 2 - -`, 0],
            [`3 1 2 - -`, 4],
            [`15 9 - 4 -`, 2],
            [`4 3 2 5 - - 7 - - 10 5 - 2 2 - 14 - - - 1 -`, -15]
        ])(
            "%p = %p",
            (operation, expectedResult) => {
                expect(rpn.subtractions(operation)).toEqual(expectedResult);
            });
    });
    describe('*', () => {
        test.each([
            [`1 0 *`, 0],
            [`0 1 *`, 0],
            [`1 1 *`, 1],
            [`1 3 2 * *`, 6],
            [`3 1 2 * *`, 6],
            [`15 9 * 4 *`, 540],
            [`4 3 2 5 * * 7 * * 10 5 * 2 2 * 14 * * * 1 *`, 2352000]
        ])(
            "%p = %p",
            (operation, expectedResult) => {
                expect(rpn.multiplications(operation)).toEqual(expectedResult);
            });
    });
    describe('/', () => {
        test.each([
            [`0 1 /`, 0],
            [`1 1 /`, 1],
            [`1 4 2 / /`, 2],
            [`8 2 2 / /`, 8],
            [`8 5 15 / /`, 24],
            [`9 15 / 6 10 / /`, 1],
            [`4 3 2 5 / / 7 / / 10 5 / 2 2 / 14 / / / 5 15 / 10 / /`, 4]
        ])(
            "%p = %p",
            (operation, expectedResult) => {
                expect(rpn.divisions(operation)).toEqual(expectedResult);
            });
    });
    describe('All together', () => {
        test.each([
            [`2 14 15 2 - 2 * + 3 1 + / *`, 20]
        ])(
            "%p = %p",
            (operation, expectedResult) => {
                expect(rpn.compute(operation)).toEqual(expectedResult);
            });
    });
    describe('De plus en plus dur', () => {
        test.each([
            [`2 3 ^`, 8], /*puissance Math.pow(a, b) */
            [`3 2 ^`, 9],
            [`1 -`, -1], /*le moins peut ne s'appliquer qu'à une opérateur*/
            [`4 SQR`, 2], /*racine carrée Math.sqrt(x) */
            [`laRéponseÀLaGrandeQuestionSurLaVieLUniversEtLeReste`, 42] /*une constante, si vous en êtes là mes félicitations ! */
        ])(
            "%p = %p",
            (operation, expectedResult) => {
                expect(rpn.compute(operation)).toEqual(expectedResult);
            });
    });
})
