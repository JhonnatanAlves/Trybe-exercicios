const { books } = require('./data');
  // Adicione o código do exercício aqui:

const currentYear = new Date().getFullYear();

const orderBooks = () => books.filter((book) => currentYear - book.releaseYear >= 60).sort((year1, year2) => year1.releaseYear - year2.releaseYear);

console.log(orderBooks());
