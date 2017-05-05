import { expect } from 'chai';
import Calculator from "../app/calculator";

describe("Calculator Mocha",  () => {
    let calculator;
    beforeEach(() =>{
        calculator = new Calculator();
    });

    it("can add", () => {
        let result = calculator.add(5, 5);
        expect(result).to.be.equal(10);
    });

    it("can subtract", () => {
        let result = calculator.subtract(5, 5);
        expect(result).to.be.equal(0);
    });

    it("can multiply", () => {
        let result = calculator.multiply(5, 5);
        expect(result).to.be.equal(25);
    });

    it("can divide", () => {
        let result = calculator.divide(5, 5);
        expect(result).to.be.equal(1);
    });
});
