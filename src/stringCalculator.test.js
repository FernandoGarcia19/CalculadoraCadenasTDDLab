import calculate from "./stringCalculator.js"

describe("Calculadora de Strings", () => {
    it("devuelve 0 para una cadena vacia", () => {
        expect(calculate("0")).toEqual("0");
    })

    it("devuelve el numero mismo cuando solo hay 1 input", () => {
        expect(calculate("2")).toEqual("2");
    })
});