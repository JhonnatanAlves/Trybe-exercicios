const { books } = require('./data');

  // Adicione o código do exercício aqui:

const filterGenre = books.filter((genre) => genre.genre === 'Ficção Científica' || genre.genre === 'Fantasia');

console.log(filterGenre);