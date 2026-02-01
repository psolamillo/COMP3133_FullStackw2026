const assert = require('assert')
const ArithmeticOps = require('../Arithmetic')
const { describe } = require('mocha')

describe("Validating Math Operations from ArithmeticOps Class", () => {
    it("should return 7 when adding 5 and 2", () =>   {
        assert.equal(ArithmeticOps.add(5,2), 7)
    })
    it("should fail when expecting 8 for 5 + 2", () => {
        assert.equal(ArithmeticOps.add(5,2), 8)
    })

    it("should return 3 when subtracting 2 from 5", () => {
        assert.equal(ArithmeticOps.sub(5,2), 3)
    })
    it("should fail when expecting 5 for 5 - 2", () => {
        assert.equal(ArithmeticOps.sub(5,2), 5)
    })

    it("should return 10 when multiplying 5 and 2", () => {
        assert.equal(ArithmeticOps.mul(5,2), 10)
    })
    it("should fail when expecting 12 for 5 * 2", () => {
        assert.equal(ArithmeticOps.mul(5,2), 12)
    })

    it("should return 5 when dividing 10 by 2", () => {
        assert.equal(ArithmeticOps.div(10,2), 5)
    })
    it("should fail when expecting 2 for 10 / 2", () => {
        assert.equal(ArithmeticOps.div(10,2), 2)
    })

})

/*
add(5, 2) expected result 7 PASS
	add(5,2) expected result 8 FAIL

sub(5, 2) expected result 3 PASS
	sub(5,2) expected result 5 FAIL

mul(5, 2) expected result 10 PASS
	mul(5,2) expected result 12 FAIL

div(10, 2) expected result 5 PASS
	div(10,2) expected result 2 FAIL


*/