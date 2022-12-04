//4 - Retorne a quantidade de vezes que a letra a maiúscula ou minúscula aparece no array de nomes.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

const countA = () => names.join('').toLowerCase().split('').reduce((allLetter, letter) => {
    if (letter === 'a') {
        allLetter += 1;
    }
    return allLetter;
}, 0)

console.log(countA());


