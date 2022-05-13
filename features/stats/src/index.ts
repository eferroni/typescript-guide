import { MatchReader } from "./composition/MatchReader";
import { CsvFileReader } from "./composition/CsvFileReader";
import { AverageGoalsAnalysis, WinsAnalysis } from "./composition/Analyzer";
import { Summary } from "./composition/Summary";
import { ConsoleReport, HtmlReport } from "./composition/OutputTarget";

const fileReader = new CsvFileReader("football.csv");

const matchReader = new MatchReader(fileReader);
matchReader.load();

let summary = Summary.winsOnConsole("Man United");
summary.buildAndPrintReport(matchReader.matches);

summary = new Summary(new AverageGoalsAnalysis("Man United"), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
