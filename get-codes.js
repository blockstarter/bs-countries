let sortBy = require('lodash').sortBy;
let fs = require('fs');
let countriesEn = require('./countries-en.json').countries;

let codes = Object.keys(countriesEn);
fs.writeFileSync(`./codes.json`, JSON.stringify(codes), 'utf-8');
fs.writeFileSync(`./codes-pretty.json`, JSON.stringify(codes, null, 2), 'utf-8');
