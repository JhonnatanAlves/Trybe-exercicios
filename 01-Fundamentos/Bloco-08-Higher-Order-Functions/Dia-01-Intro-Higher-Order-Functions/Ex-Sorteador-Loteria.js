const checkNumber = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, callback) => {
const number = Math.floor(Math.random() * 5 + 1);

return callback(myNumber, number) ? 'Congratulations, you win!' : 'Try again';
};

console.log(lotteryResult(3, checkNumber));


