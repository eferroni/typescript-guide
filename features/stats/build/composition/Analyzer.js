"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AverageGoalsAnalysis = exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(data) {
        let wins = 0;
        for (let match of data) {
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} times`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
class AverageGoalsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(data) {
        let matchesCount = 0;
        let golPro = 0;
        let golCons = 0;
        for (let match of data) {
            if (match[1] === this.team) {
                matchesCount++;
                golPro += match[3];
                golCons += match[4];
            }
            else if (match[2] === this.team) {
                matchesCount++;
                golCons += match[3];
                golPro += match[4];
            }
        }
        return `Team ${this.team}, gols average: pro ${golPro / matchesCount}, cons ${golCons / matchesCount}`;
    }
}
exports.AverageGoalsAnalysis = AverageGoalsAnalysis;
