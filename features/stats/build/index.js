"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MATCHReader_1 = require("./MATCHReader");
const fileReader = new MATCHReader_1.MatchReader("football.csv");
fileReader.read();
let manUnitedWins = 0;
for (let match of fileReader.data) {
    if (match[1] === "Man United" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(fileReader.data[0]);
console.log(`Man United won ${manUnitedWins} games`);
