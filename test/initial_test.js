const assert = require("assert");

describe("Test suite", function () {

    describe("Test One", function () {
        it("should assert something", function () {
            assert(1 === 1);
        });
    });

    describe("Test Two", function () {
        it("should assert something else", function () {
            assert(10 > 9);
        });
    });
});