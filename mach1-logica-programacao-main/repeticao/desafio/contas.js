/**
 * Fazer a leitura de contas a ser pagas por um usuario
 * O programa deve ler a descriçao da conta e o valor da conta.
 * O programa deve acumular as contas e somar os valores e mostrar na o texto do programa conforme abaixo:
 * Aluguel: R$ 1500.00
 * Condomínio: R$ 399.00
 * Energia: R$ 151.35
 * Combustível: R$ 687.12
 * Internet: R$ 145.55
 * IPTU: R$ 200.00
 * Cartão de crédito: R$ 1850.00
 * -------------------------
 * Nesse mês tenho que pagar 7 contas totalizando R$ 4933.02 ;(
 */


 const prompt = require('prompt-sync')();
 let descricaoConta;
 let valorConta;
 let outraConta = 'S';
 
 console.log("---CONTA---");
 while (outraConta === 'S') {
     
     console.log('Digita a descrição da conta: ');
     descricaoConta = prompt();
 
     console.log('Digita o valor da conta: ');
     valorConta = Number(prompt());
 
     console.log('Deseja inserir outra conta? S/N');
     outraConta = prompt();
 }