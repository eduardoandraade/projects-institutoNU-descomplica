var custoFabrica = 40000;
var porcDist;
var porcImp;
var custoFinal;

porcDist = custoFabrica * 28/100;
porcImp = custoFabrica * 45/100;
custoFinal = custoFabrica + porcDist + porcImp;

console.log("O custo final do veiculo é: " + custoFinal)