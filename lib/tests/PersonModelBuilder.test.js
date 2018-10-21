"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../index");
var DefaultPerson = /** @class */ (function () {
    function DefaultPerson(age, dob, email, married, name) {
        this.age = age;
        this.dob = dob;
        this.email = email;
        this.married = married;
        this.name = name;
    }
    return DefaultPerson;
}());
var PersonModelBuilder = /** @class */ (function (_super) {
    __extends(PersonModelBuilder, _super);
    function PersonModelBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonModelBuilder.prototype.min = function () {
        return new DefaultPerson(20, new Date(0), 'mario@web.de', true, 'Mario');
    };
    return PersonModelBuilder;
}(index_1.default));
test("Person ModelBuilder#min", function () {
    var sut = new PersonModelBuilder();
    var person = sut.min();
    expect(person.name).toEqual('Mario');
    expect(person.age).toEqual(20);
    expect(person.dob).toEqual(new Date(0));
    expect(person.married).toEqual(true);
});
test("Person ModelBuilder#max", function () {
    var sut = new PersonModelBuilder();
    expect(sut.max()).toEqual(sut.min());
});
test("Person ModelBuilder#mix", function () {
    var sut = new PersonModelBuilder();
    expect(sut.mix()).toEqual(sut.min());
});
test("Person ModelBuilder#fix", function () {
    var sut = new PersonModelBuilder();
    expect(sut.fix()).toEqual(sut.min());
});
test("Person ModelBuilder#list", function () {
    var sut = new PersonModelBuilder();
    expect(sut.list(1)).toEqual([sut.min()]);
});
