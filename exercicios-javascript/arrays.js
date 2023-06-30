var valores = [9, 0, 1, 3, 4, 5]

console.log(valores[3]);

console.log("Array invertido: " + valores.reverse());

for ( var pos = 0; pos < valores.length; pos++){
    console.log("Posição: " + pos + " Valor: " + valores[pos])
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BWM", "Yamaha", "Honda");


// Calcular a média de todos os números de um array

var soma = 0;

for ( var pos = 0; pos < valores.length; pos++){
    soma += valores[pos]
}

var media = soma/valores.length;
console.log(media)

var arr1 = [1,2,3,4,5,6];

console.log(arr1.join('|'));

var retirado = arr1.shift();
console.log(retirado);
console.log(arr1);

console.log("Posição do numero 3: " + arr1.indexOf(3));

arr1.push(7);
console.log(arr1);

arr1.pop();
console.log(arr1);


var arr2 = [-2, 10, -3, 22, -55, 32, -4]
var arrPositivo = []
var arrNegativo = []

for ( var i = 0; i < arr2.length; i++) {
    if (arr2[i] >= 0) {
        arrPositivo.push(arr2[i])
    } else {
        arrNegativo.push(arr2[i])
    }
}

console.log("Números positivos:", arrPositivo);
console.log("Números negativos:", arrNegativo);

var nomes = [ 'João', 'Maria', 'Jose', 'Adriano', 'Laura']
var novosNomes = nomes.splice(1, 3, 'Isinha', 'Du')

console.log(nomes)
console.log(novosNomes)


var pessoa = [ 'Eduardo', 'Joana', 'Wallace', 'Rosália']

var pessoas1 = pessoa.slice(1, 3);

console.log(pessoa)
console.log(pessoas1)

var ano = [ 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

var trimestres = [];

for (var i = 0; i < ano.length; i += 3) {
    var trimestre = ano.slice(i, i + 3)
    trimestres.push(trimestre);
}

console.log(trimestres)


