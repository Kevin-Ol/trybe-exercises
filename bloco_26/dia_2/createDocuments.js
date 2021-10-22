const fs = require('fs');

// Crie uma função que lê e escreve vários arquivos ao mesmo tempo.

// Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
// Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
// Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt .
// O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!! .

async function createDocuments() {
  const words = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  try {
    words.map((word, index) => fs.promises.writeFile(`file${index + 1}.txt`, word));
    await Promise.all(words);
    const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt']
    const filesContent = await Promise.all(files.map((file) => fs.promises.readFile(file, 'utf8')));
    console.log(filesContent.join(' '));
  } catch (error) {
    console.log(error);
  }
}
createDocuments();
