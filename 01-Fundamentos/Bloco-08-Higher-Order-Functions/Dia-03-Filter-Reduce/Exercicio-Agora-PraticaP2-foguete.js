const data2 = require('./data2');

//1 - Calcule a quantidade total da população de todos os países.

const getPopulation = () => data2.countries.reduce((acc, curr) => acc + curr.population, 0)

console.log(getPopulation());