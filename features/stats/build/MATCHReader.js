"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    constructor(filename) {
        super(filename);
        this.filename = filename;
    }
    mapRow(row) {
        return [
            (0, utils_1.dateStringToDate)(row[0]),
            row[1],
            row[2],
            +row[3],
            +row[4],
            row[5],
            row[6],
        ];
    }
}
exports.MatchReader = MatchReader;
