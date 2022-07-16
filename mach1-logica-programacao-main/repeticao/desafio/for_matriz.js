/**
 * [1, 1] [1, 2] [1, 3]
 * [2, 1] [2, 2] [2, 3]
 */






//  procurar letras 
//  achar solução para o trabalho
for (let linha = 1; linha <= 3; linha++) {
  let mostrarLinha = '';
  for (let coluna = 1; coluna <= 4; coluna++) {
      mostrarLinha += `[${linha}, ${coluna}] `;
  }
  console.log(mostrarLinha);
}
