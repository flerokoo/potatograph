var PayloadContainer = require("../../src/data/payload-container");

describe("PayloadContainer", function () {
    
    var cont = new PayloadContainer();
    beforeEach(function () {
        cont = new PayloadContainer();
    })

    describe("addPayload", function () {
        
        it("should allow object which contains new payload", function () {
            cont.addPayload({ a: 1, b: 2 });
            cont.addPayload({ d: 3, c: 4 });
            expect(cont.payload.a).toEqual(1)
            expect(cont.payload.b).toEqual(2)
            expect(cont.payload.c).toEqual(4)
        })

        it("should add new property without removing any other payload", function () {
            cont.setPayload({ a: 1, b: 2 })
            cont.addPayload("c", 3);

            expect(cont.payload).toHaveProperty("a");
            expect(cont.payload).toHaveProperty("b");
            expect(cont.payload).toHaveProperty("c");
        })

        it("should throw an error when trying overwriting existing payload with overwrite!=true", function () {
            cont.setPayload({ a: 1 });
            expect(cont.addPayload.bind(cont, "a", 2)).toThrowError();
        })

        it("shouldn't throw an error when overwriting existing payload", function () {
            cont.setPayload({ a: 1 });
            expect(cont.addPayload.bind(cont, "a", 2, true)).not.toThrow();
        })

    })

});