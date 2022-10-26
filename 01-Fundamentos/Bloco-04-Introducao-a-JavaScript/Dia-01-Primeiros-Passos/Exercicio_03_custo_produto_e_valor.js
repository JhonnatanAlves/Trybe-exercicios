
const custoDoProduto = 200;
const valorDeVenda = 400;

if (custoDoProduto >= 0 && valorDeVenda >= 0) {
  const custoTotalDoProduto = custoDoProduto * 0.20;
  const totalDaVenda = (valorDeVenda - custoTotalDoProduto) * 1000;
  console.log(totalDaVenda);
} else {
  console.log("Error, os valores não podem ser negativos");
};