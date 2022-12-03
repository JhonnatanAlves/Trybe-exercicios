const data2 = require('./data2');

  const longestName = () => data2.countries.reduce((prev, curr) => prev.name.length > curr.name.length ? prev : curr);

  console.log(longestName());