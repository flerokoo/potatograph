var math = require("../../src/utils/math");


test("lerp #1", function () {
    expect(math.lerp(0.5, 5, 10)).toEqual(7.5);
});

test("lerp #2", function () {
    expect(math.lerp(0.5, 1, 7)).toEqual(4);
});

test("clamp #1", function () {
    expect(math.clamp(0.5, 0.1, 3)).toEqual(0.5)
})

test("clamp #2", function () {
    expect(math.clamp(12, 5, -1)).toEqual(5)
})

test("clamp #3", function () {
    expect(math.clamp(-440.5, -5, 10)).toEqual(-5)
})

test("clamp01 #1", function () {
    expect(math.clamp01(10)).toEqual(1)
})

test("clamp01 #2", function () {
    expect(math.clamp01(-10)).toEqual(0)
})

test("clamp01 #3", function () {
    expect(math.clamp01(0.3)).toEqual(0.3)
})

test("map #1", function () {
    expect(math.map(0.5, -1, 1, 0, 100)).toEqual(75)
})