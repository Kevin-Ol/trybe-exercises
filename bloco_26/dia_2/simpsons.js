const fs = require('fs');

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
async function printCharacters() {
  try {
    const characters = await fs.promises.readFile('simpsons.json', 'utf8');
    const arrayOfCharacters = JSON.parse(characters);
    arrayOfCharacters.forEach((character) => console.log(`${character.id} - ${character.name}`))
  } catch (error) {
    console.log(error)
  }
}

// printCharacters();

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
async function printOneCharacter(id) {
  try {
    const characters = await fs.promises.readFile('simpsons.json', 'utf8');
    const arrayOfCharacters = JSON.parse(characters);
    const character = arrayOfCharacters.find((character) => Number(character.id) === id);
    if (!character) {
      throw Error('id não encontrado')
    }
    console.log(character)
  } catch (error) {
    console.log(error)
  }
}

// printOneCharacter(10)

// Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function removeCharacters() {
  try {
    const characters = await fs.promises.readFile('simpsons.json', 'utf8');
    const arrayOfCharacters = JSON.parse(characters);
    const newArrayOfCharacters = arrayOfCharacters.filter((character) => Number(character.id) !== 10 && Number(character.id) !== 6);
    await fs.promises.writeFile('simpsons.json', JSON.stringify(newArrayOfCharacters))
  } catch (error) {
    console.log(error)
  }
}

// removeCharacters()

// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
async function createSimpsonsFamily() {
  try {
    const characters = await fs.promises.readFile('simpsons.json', 'utf8');
    const arrayOfCharacters = JSON.parse(characters);
    const newArrayOfCharacters = arrayOfCharacters.filter((character) => Number(character.id) >= 1 && Number(character.id) <= 4);
    await fs.promises.writeFile('simpsonFamily.json', JSON.stringify(newArrayOfCharacters))
  } catch (error) {
    console.log(error)
  }
}

// createSimpsonsFamily()

// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
async function addNelsonMuntz() {
  try {
    const characters = await fs.promises.readFile('simpsonFamily.json', 'utf8');
    const arrayOfCharacters = JSON.parse(characters);
    const newArrayOfCharacters = arrayOfCharacters.push({
      id: Number(arrayOfCharacters[ arrayOfCharacters.length - 1].id) + 1,
      name: "Nelson Muntz"
    });
    await fs.promises.writeFile('simpsonFamily.json', JSON.stringify(arrayOfCharacters))
  } catch (error) {
    console.log(error)
  }
}

// addNelsonMuntz()

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
async function replaceNelsonMuntz() {
  try {
    const characters = await fs.promises.readFile('simpsonFamily.json', 'utf8');
    const arrayOfCharacters = JSON.parse(characters);
    const NelsonMuntzObject = arrayOfCharacters.find((character) => character.name === "Nelson Muntz");
    NelsonMuntzObject.name = "Maggie Simpson";
    await fs.promises.writeFile('simpsonFamily.json', JSON.stringify(arrayOfCharacters))
  } catch (error) {
    console.log(error)
  }
}

// replaceNelsonMuntz()
