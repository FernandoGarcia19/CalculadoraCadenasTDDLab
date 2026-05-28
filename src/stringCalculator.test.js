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

    it("devuelve la suma cuando usa guion como separador", () => {
        expect(calculate("1-2,3")).toEqual("6");
    })

    it("devuelve la suma cuando usa delimitador personalizado", () => {
        expect(calculate("//[;] 6;7;4")).toEqual("17");
    })

    it("devuelve la suma con delimitador personalizado y separadores por defecto", () => {
        expect(calculate("//[;] 6,3-2;1")).toEqual("12");
    })

    it("ignora numeros mayores a 1000", () => {
        expect(calculate("2,1001")).toEqual("2");
    })
});