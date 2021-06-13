// Parte 1

const createObject = (object, key, value) => {
    object[key] = value;
    return object;
}

console.log(createObject({}, 'chave', 7))
console.log(createObject(createObject({}, 'chave', 7), 'outra', 8))

// Parte 2

const showSkills = (student) => {
    const keys = Object.keys(student)
    for (let key = 0; key < keys.length; key += 1) {
        console.log(`${keys[key]}, Nível: ${student[keys[key]]}`)
    }
}

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };

  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

// showSkills(student1)
// console.log('------------')
// showSkills(student2)

// Parte 3

const showSkills2 = (student) => {
    const keys = Object.keys(student)
    const values = Object.values(student)
    for (let key = 0; key < keys.length; key += 1) {
        console.log(`${keys[key]}, Nível: ${values[key]}`)
    }
}

showSkills2(student1)
console.log('------------')
showSkills2(student2)

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
//   console.log(pairKeyValue);

  for(index in pairKeyValue) {
    console.log('--------');
    console.log('País:', pairKeyValue[index][0]);
    console.log('Capital:', pairKeyValue[index][1]);
  };


  
const person = {
    name:'Roberto',
  };
  
  const lastName = {
    lastName: 'Silva',
  };
  
  const newPerson = Object.assign({},person,lastName);
  newPerson.name = 'Gilberto';
  console.log(newPerson);
  console.log(person);