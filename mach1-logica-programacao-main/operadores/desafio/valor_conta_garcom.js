/**
Ler o valor da conta, calcular e infomar o valor da taxa de 13% do garçom e o valor total a ser pago no jantar.
*/

// const prompt = require('prompt-sync')();
// console.log("Digite o valor da conta: ");
// let valorConta = Number(prompt());

// let valorGarcom = valorConta * 0.13;

// let valorTotalConta = valorConta + valorGarcom;

// console.log("Valor conta: ");
// console.log("Valor 13% do garçom: R$ " + valorGarcom.toFixed(2));
// console.log("Valor total conta: R$ " + valorTotalConta.toFixed(2));

const prompt = require('prompt-sync')();

console.log('Digite o valor da conta:')
let vConta = Number(prompt());

let vGarcom =  vConta * 0.13
let total = vConta + vGarcom

console.log(`O total de consumo é ${vConta}, com a taxa do garço de 13%, o total é ${total}`)