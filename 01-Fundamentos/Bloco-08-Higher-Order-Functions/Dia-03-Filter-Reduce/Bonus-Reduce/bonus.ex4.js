const databonus = require('./databonus');
  
const longestNamedBook = () => databonus.books.reduce((acc, curr) => (curr.name
    .length > acc) ? curr : acc);
  
  console.log(longestNamedBook());