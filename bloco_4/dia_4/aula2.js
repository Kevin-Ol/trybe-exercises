let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  }

for (let name in names) {
    console.log('Olá ' + names[name])
}

let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  }

for (let info in carro) {
    console.log(info + ": " + carro[info])
}