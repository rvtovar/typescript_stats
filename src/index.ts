import { MatchReader } from './composition/MatchReader';
import { CsvFileReader } from './composition/CsvFileReader';
import { MatchResult } from './MatchResult';

// Create an object that satifies the dataReader interface
const csvFileReader = new CsvFileReader('football.csv');
//Create an instance of MatchReader and pass in something satisying
const reader = new MatchReader(csvFileReader);
reader.load();
// refactor to Enum

let manUnitedWins = 0;

for (let match of reader.matches) {
  if (match[1] == 'Man United' && match[5] == MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] == 'Man United' && match[5] == MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`
    Man United won ${manUnitedWins} games
`);
