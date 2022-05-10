import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  constructor(public filename: string) {
    super(filename);
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      +row[3],
      +row[4],
      row[5] as MatchResult,
      row[6],
    ];
  }
}
