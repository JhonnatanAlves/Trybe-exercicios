const data2 = require('./data2');

const expectedResult = 4311757;

const getTotalArea = () => data2.countries.reduce((acc, cur) => acc + cur.area, 0)

console.log(getTotalArea());