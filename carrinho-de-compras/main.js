var valorTotal = [0, 0];
var valorProduto = [119.90, 79.90];
var quantity = [0,0];

function addItemCart(item){

    var qtd = document.getElementById('quantity' + item);
    var amount = document.getElementById('total' + item);
    quantity[item] += 1;
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * quantity[item]

    qtd.innerHTML = quantity[item];
    amount.innerHTML = valorTotal[item].toFixed(2);   
    
    valorCompra()
} 

function removeItemCart(item) {

    if(quantity[item] > 0){
        quantity[item] -= 1;
        var qtd = document.getElementById('quantity' + item);
        var amount = document.getElementById('total' + item);

        qtd.innerHTML = quantity[item];
        valorTotal[item] = Number.parseFloat(valorProduto[item] * quantity[item]);
        amount.innerHTML = valorTotal[item].toFixed(2);
    }

    valorCompra()
}

function valorCompra() {
    var valorTotalCompra = document.getElementById('valorTotalCompra');
    var valor = 0;

    for(var i = 0; i < valorTotal.length; i++){
        valor += valorTotal[i];
    }
    
    valorTotalCompra.innerHTML = valor.toFixed(2);

 

}