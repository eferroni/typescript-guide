"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateSplit = dateString.split("/");
    return new Date(+dateSplit[2], +dateSplit[1] - 1, +dateSplit[0]);
};
exports.dateStringToDate = dateStringToDate;
