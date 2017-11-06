let sortBy = require('lodash').sortBy;
let fs = require('fs');
let countriesEn = require('./countries-en.json').countries;
let countriesRu = require('./countries-ru.json').countries;

let toArray = (json, lang) => {
    let codes = Object.keys(json);
    let objects = codes.map(code => { return { code, name: json[code] }});
    let arr = sortBy(objects, ['name']).map(o => [o.code, o.name]);
    fs.writeFileSync(`./array-${lang}.json`, JSON.stringify(arr), 'utf-8');
};

toArray(countriesEn, 'en');
toArray(countriesRu, 'ru');