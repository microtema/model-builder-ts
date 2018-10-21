"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
test("Default ModelBuilder", function () {
    var sut = new index_1.default();
    expect(sut.min()).toEqual({});
    expect(sut.max()).toEqual(sut.min());
    expect(sut.mix()).toEqual(sut.min());
    expect(sut.fix()).toEqual(sut.min());
    expect(sut.list().length).toBeGreaterThanOrEqual(1);
    expect(sut.list().length).toBeLessThanOrEqual(10);
    expect(sut.list(1).length).toEqual(1);
});
