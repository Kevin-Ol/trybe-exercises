const readline = require('readline-sync');
const fs = require('fs');

// Crie um script que substitua uma palavra por outra em um arquivo escolhido pela pessoa usuária:

// Pergunte à pessoa usuária qual arquivo ela deseja utilizar.
// Leia o arquivo.
// Caso o arquivo não exista, exiba um erro na tela e encerre a execução do script.
// Caso o arquivo exista, solicite a palavra a ser substituída.
// Solicite a nova palavra, que substituirá a palavra anterior.
// Imprima na tela o conteúdo do arquivo com as palavras já substituídas.
// Pergunte o nome do arquivo de destino.
// Salve o novo arquivo no caminho de destino.

async function replaceWords() {
  const fileName = readline.question('Digite o arquivo desejado: ');
  try {
    const file = await fs.promises.readFile(fileName, 'utf8');
    const oldWord = readline.question('Digite a palavra a ser substituída: ');
    const newWord = readline.question('Digite a nova palavra: ');
    const newFile = file.replace(new RegExp(oldWord, 'g'), newWord)
    console.log(newFile);
    const newPath = readline.question('Digite o nome do arquivo de destino: ');
    await fs.promises.writeFile(newPath, newFile);
  } catch (error) {
    console.log('Arquivo inexistente');
  }
}

replaceWords();
