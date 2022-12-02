const data = require('./data');

// 4 - Crie um array que possua apenas os nomes de todas as pessoas autoras de ficção científica ou fantasia e ordene por ordem alfabética.

const fantasyOrScienceFictionAuthors = () => data.books
.filter((authorNames) => authorNames.genre === 'Fantasia' || authorNames.genre === 'Ficção Científica')
.map((bookName) => bookName.author.name)
.sort();

console.log(fantasyOrScienceFictionAuthors());