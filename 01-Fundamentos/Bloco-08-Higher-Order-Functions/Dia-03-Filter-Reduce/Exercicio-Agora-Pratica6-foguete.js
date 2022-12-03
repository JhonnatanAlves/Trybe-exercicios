const data = require('./data');

const authorWith3DotsOnName = () => data.books.find((book) => (
    book.author.name.split(' ')
    .filter((word) => word.endsWith('.')).length === 3
    )).name;
    
    console.log(authorWith3DotsOnName());