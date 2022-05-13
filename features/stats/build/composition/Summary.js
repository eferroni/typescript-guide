"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const Analyzer_1 = require("./Analyzer");
const OutputTarget_1 = require("./OutputTarget");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsOnConsole(team) {
        return new Summary(new Analyzer_1.WinsAnalysis(team), new OutputTarget_1.ConsoleReport());
    }
    buildAndPrintReport(data) {
        this.outputTarget.print(this.analyzer.run(data));
    }
}
exports.Summary = Summary;
