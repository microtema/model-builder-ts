"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ModelBuilder = /** @class */ (function () {
    function ModelBuilder() {
    }
    ModelBuilder.prototype.min = function () {
        return {};
    };
    ModelBuilder.prototype.max = function () {
        return this.min();
    };
    ModelBuilder.prototype.mix = function () {
        var min = Math.random() >= 0.5;
        if (min) {
            return this.min();
        }
        return this.max();
    };
    ModelBuilder.prototype.fix = function () {
        return this.min();
    };
    ModelBuilder.prototype.list = function (size) {
        var list = [];
        var maxSize = size || (Math.floor(Math.random() * 9 + 1));
        for (var i = 0; i < maxSize; i++) {
            list.push(this.mix());
        }
        return list;
    };
    return ModelBuilder;
}());
exports.default = ModelBuilder;
