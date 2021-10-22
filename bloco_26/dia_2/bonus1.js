const readline = require('readline-sync');
const fs = require('fs');

// Crie um script que mostre na tela o conteúdo de um arquivo escolhido pela pessoa usuária:

// Pergunte à pessoa usuária qual arquivo ela deseja ler.
// Leia o arquivo indicado.
// Caso o arquivo não exista, exiba na tela "Arquivo inexistente" e encerre a execução do script.
// Caso o arquivo exista, escreva seu conteúdo na tela.

async function askFile() {
  const fileName = readline.question('Digite o arquivo desejado: ');
  try {
    const file = await fs.promises.readFile(fileName, 'utf8');
    console.log(file);
  } catch (error) {
    console.log('Arquivo inexistente');
  }
}

askFile();
