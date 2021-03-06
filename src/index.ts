import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { read } from 'fs';

// Create an object that satifies the dataReader interface
// const csvFileReader = new CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisying
// const reader = new MatchReader(csvFileReader);

const reader = MatchReader.fromCsv('football.csv');
reader.load();
// reader.load();
// refactor to Enum

let summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport());

summary.buildAndPrintReport(reader.matches);

let newSummary = Summary.winsAnalysisWithHtmlReport(
  'Man United',
  'report.html'
);
newSummary.buildAndPrintReport(reader.matches);
