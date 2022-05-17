"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.get = void 0;
require("reflect-metadata");
function get(path) {
    return function (target, key, desc) {
        Reflect.defineMetadata("path", path, target, key);
    };
}
exports.get = get;
function controller(path) {
    return function (target) { };
}
exports.controller = controller;
