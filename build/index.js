"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./composition/MatchReader");
const CsvFileReader_1 = require("./composition/CsvFileReader");
const MatchResult_1 = require("./MatchResult");
// Create an object that satifies the dataReader interface
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisying
const reader = new MatchReader_1.MatchReader(csvFileReader);
reader.load();
// refactor to Enum
let manUnitedWins = 0;
for (let match of reader.matches) {
    if (match[1] == 'Man United' && match[5] == MatchResult_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] == 'Man United' && match[5] == MatchResult_1.MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`
    Man United won ${manUnitedWins} games
`);
