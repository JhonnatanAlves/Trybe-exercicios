const data = require ('./data');
  
const currentYear = new Date().getFullYear();

const oldBooks = () => data.books.filter((moreYears) => (currentYear - moreYears.releaseYear) > 60).map((nameBooks) => nameBooks.name);

console.log(oldBooks());
  