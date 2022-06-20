"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
const ConsoleReport_1 = require("./reportTargets/ConsoleReport");
// Create an object that satifies the dataReader interface
// const csvFileReader = new CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisying
// const reader = new MatchReader(csvFileReader);
const reader = MatchReader_1.MatchReader.fromCsv('football.csv');
reader.load();
// reader.load();
// refactor to Enum
let summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(reader.matches);
let newSummary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United', 'report.html');
newSummary.buildAndPrintReport(reader.matches);
