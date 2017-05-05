import { expect } from 'chai';

describe("Calculator Mocha",  () => {
    let calculator;
    beforeEach(() =>{
        calculator = new Calculator();
    });

    it("can add", () => {
        var result = calculator.add(5, 5);
        expect(result).to.be.equal(10);

    });

    it("can subtract", () => {
        var result = calculator.subtract(5, 5);
        expect(result).to.be.equal(0);
    });

    it("can multiply", () => {
        var result = calculator.multiply(5, 5);
        expect(result).to.be.equal(25);
    });

    it("can divide", () => {
        var result = calculator.divide(5, 5);
        expect(result).to.be.equal(1);
    });
});
