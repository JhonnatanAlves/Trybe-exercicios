const { books } = require('./data');

// Faça uma função que retorne os nomes dos livros, dado o ano de nascimento das pessoas autoras.

const booksByAuthorBirthYear = (birthYear) => books.filter((book) => book.author.birthYear === birthYear).map((book) => book.name);

console.log(booksByAuthorBirthYear(1920));