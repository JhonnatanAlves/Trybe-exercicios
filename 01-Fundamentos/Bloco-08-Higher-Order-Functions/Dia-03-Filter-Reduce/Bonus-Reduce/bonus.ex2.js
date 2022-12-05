const { books } = require('./databonus');
const databonus = require('./databonus');

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const reduceNames = () => databonus.books.reduce((acc, curr, index) => (index === books.
    length - 1) ? `${acc} ${curr.author.name}.` : 
    `${acc} ${curr.author.name},`, '');


console.log(reduceNames());