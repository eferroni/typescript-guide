import fs from "fs";
import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MATCHReader";

const fileReader = new MatchReader("football.csv");
fileReader.read();

let manUnitedWins = 0;

for (let match of fileReader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(fileReader.data[0]);
console.log(`Man United won ${manUnitedWins} games`);
