// Exercício 1
const fat = (number) => {
    let result = 1
    for (let value = number; value > 0; value -= 1) {
        result *= value
    }
    return result
}
console.log(fat(4))

// Exercício 1 bonus
const fat2 = (number) => (number === 1) ? 1 : number * fat2(number -1) 
console.log(fat2(6))

// Exercício 2

const longestWord = (phrase) => {
    const phraseArray = phrase.split(' ')
    let biggest = phraseArray[0]
    for (let word = 1; word < phraseArray.length; word += 1) {
        if (phraseArray[word].length > biggest.length) {
            biggest = phraseArray[word]
        }
    }
    return biggest
}

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'

// Exercício 4
const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
    ${result}

    #goTrybe
    `

    return result
}

console.log(buildSkillsPhrase("Lucas"))