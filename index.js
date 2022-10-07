
const CSV_FOLDER = 'CSVs'
const CSV_FILE = 'demo.csv'

// Não gostei dessa lib.
// const fs = require('fs'); 
// const {parse} = require('csv-parse');
// const parser = parse({columns: true}, function (err, records) {
// 	console.log(records);
// });
// const resultObject = fs.createReadStream(`${__dirname}/${CSV_FOLDER}/${CSV_FILE}`).pipe(parser);
// 

const CSVToJSON = require('csvtojson');
const fs = require('fs');
const { stringify } = require('csv-stringify');

const writeCSV = (data, filename) => {
  stringify(data, {
    header: true
  }, function (err, output) {
    console.log(output)
    fs.writeFile(__dirname + '/' + filename, output, () => console.log('salvo'));
  })
}

CSVToJSON().fromFile(`${__dirname}/${CSV_FOLDER}/${CSV_FILE}`).then(data => {
  console.log(data);
  writeCSV(data, 'resultado.csv');
  return data;
}).catch(err => {
  // log error if any
  console.log(err);
  return null;
});
