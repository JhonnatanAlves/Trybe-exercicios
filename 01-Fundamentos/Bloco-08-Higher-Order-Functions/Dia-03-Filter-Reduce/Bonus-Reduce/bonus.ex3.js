const { books } = require('./databonus');
const databonus = require('./databonus');

//3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const averageAge = () => databonus.books.map((book) => book.releaseYear - book.
author.birthYear).reduce((acc, curr) => acc + curr) / books.length;

console.log(averageAge());