import { MatchData } from "./MatchReader";
import { WinsAnalysis } from "./Analyzer";
import { ConsoleReport } from "./OutputTarget";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsOnConsole(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(data: MatchData[]): void {
    this.outputTarget.print(this.analyzer.run(data));
  }
}
