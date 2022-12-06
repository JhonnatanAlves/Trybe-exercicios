//Para fixar
//Vamos fazer uma salada de frutas com os itens adicionais que você desejar.
//Faça uma função chamada fruitSalad, passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Melancia', 'Uva', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Granola', 'Amendoim', 'Creme de Ninho'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui
  return [...fruit, ... additional]
};

// console.log(fruitSalad(specialFruit, additionalItens));

//Rest

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
// console.log(sum(4, 7, 8, 9, 60, 98, 90, 88, 123)); // 88

//Object Destructuring

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
  const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
    
  const userJobs = {...user, ...jobInfos};

  const {name, age, nationality, profession, squad, squadInitials} = userJobs;

//   console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}.`);