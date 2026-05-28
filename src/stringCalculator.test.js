import calculate from "./stringCalculator.js"

describe("Calculadora de Strings", () => {
    it("devuelve 0 para una cadena vacia", () => {
        expect(calculate("0")).toEqual("0");
    })

    it("devuelve el numero mismo cuando solo hay 1 input", () => {
        expect(calculate("2")).toEqual("2");
    })

    it("devuelve la suma de 2 numeros separados por comas", () => {
        expect(calculate("1,2")).toEqual("3");
    })

    it("devuelve la suma de varios numeros separados por comas", () => {
        expect(calculate("1,2,3")).toEqual("6");
    })
});