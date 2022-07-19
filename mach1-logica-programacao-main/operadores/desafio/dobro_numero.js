/**
Fazer um programa que leia um numero usando o prompt, calcule e infome o dobro desse número.
*/

// const prompt = require('prompt-sync')();

// console.log("Digite o número");
// let numero = Number(prompt()); //obrigando o dado a vir no padrão numérico 
// let dobro = numero * 2;

// console.log("O dobro do número: ");
// console.log(dobro);


const prompt = require('prompt-sync')();

console.log("Digite um número")

let num = Number(prompt()); 
let dobro = num * 2

console.log(`O dobro é ${dobro}`)