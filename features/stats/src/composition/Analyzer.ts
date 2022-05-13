import { MatchData } from "./MatchReader";
import { MatchResult } from "../MatchResult";
import { Analyzer } from "./Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(data: MatchData[]): string {
    let wins = 0;
    for (let match of data) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} times`;
  }
}

export class AverageGoalsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(data: MatchData[]): string {
    let matchesCount = 0;
    let golPro = 0;
    let golCons = 0;

    for (let match of data) {
      if (match[1] === this.team) {
        matchesCount++;
        golPro += match[3];
        golCons += match[4];
      } else if (match[2] === this.team) {
        matchesCount++;
        golCons += match[3];
        golPro += match[4];
      }
    }
    return `Team ${this.team}, gols average: pro ${
      golPro / matchesCount
    }, cons ${golCons / matchesCount}`;
  }
}
