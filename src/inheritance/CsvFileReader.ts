import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;

  // Method reads ind ata from a filename, then splits it on new lines, then we map through each string and return an array of strings
  // then we map through again and format the data inside the array to strings to better fit their datatypes
  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
