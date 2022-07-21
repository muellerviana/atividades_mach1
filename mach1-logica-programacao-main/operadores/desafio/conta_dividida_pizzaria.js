/**
Ler o total da conta e quantos clientes irão pagar
Calcule e informe o valor a ser pago por cliente.

Exemplo: 
Valor da conta: 100
Numero de clientes: 4
Valor por cliente: 25
*/


const prompt = require('prompt-sync')();

console.log('Digite o valor da conta:');
var vConta = prompt();
console.log('Digite o número de clientes:')
var nClientes = prompt();


// var valorCliente = (vConta / nClientes);

// console.log(`O valor a ser pago por cliente é: ${valorCliente}`);

console.log(`O valor a ser pago por cliente é: ${ vConta / nClientes}`);
