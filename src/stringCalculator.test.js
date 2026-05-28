import calculate from "./stringCalculator.js"

describe("Calculadora de Strings", () => {
    it("devuelve 0 para una cadena vacia", () => {
        expect(calculate("0")).toEqual(0);
    })
});