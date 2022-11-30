const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const arraysCompare = (rigthAnswer, studentAnswer) => {
    if(rigthAnswer === studentAnswer) {
        return 1;
    } if (studentAnswer === 'N.A') {
        return 0;
    }
    return -0.5;
};

countPoints = (rigthAnswer, studentAnswer, action) => {
    let contador = 0;
    for (let index = 0; index < rigthAnswer.length; index += 1) {
        const actionReturn = action(rigthAnswer[index], studentAnswer[index]);
        contador += actionReturn;
    }
    return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, arraysCompare));