let peca = 'Bispo';

switch (peca.toLowerCase())
{
case 'rainha': console.log('Rainha -> Todas as direções, e quantas casas quiser.')
    break;
case 'rei': console.log('Rei -> Todas as direções, porém apenas uma casa por vez.')
    break;
case 'bispo': console.log('Bispo -> Somente em diagonal.')
    break;
case 'cavalo': console.log('Cavalo -> Apenas em L para qualquer direção.')
    break;
case 'torre': console.log('Torre -> Apenas em vertical e horizontal.')
    break;
case 'peão': console.log('Peão -> Apenas para frente, podendo no inicio avançar duas casas.')
    break;
default: console.log('Erro, peça inválida.')
}