// A nova tarefa do seu time de desenvolvimento é organizar o sistema de pessoas colaboradoras de uma rede de mercados. Para isso:
// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  // Adicione seu código aqui

// const orderAge = people.sort((age1, age2) => age1.age - age2.age);
  
  

// Agora modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

const orderAge = people.sort((age1, age2) => age2.age - age1.age);

console.log(orderAge);
