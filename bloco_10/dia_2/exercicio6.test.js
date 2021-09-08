const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui.
  new Promise ((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) {
        resolve(animal);
      }
      reject('Nenhum animal com esse nome!')
    }, 1000)
  })
);

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name).then((animal) => animal);
};

const findAnimalByAge = (age) => (
  // Adicione o código aqui.
  new Promise ((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.age === age);
      if (arrayAnimals.length > 0) {
        resolve(arrayAnimals);
      }
      reject('Nenhum animal com essa idade!')
    }, 1000)
  })
);
// ---------------------

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne array com o objeto do animal', () => {
      expect.assertions(1);
      return findAnimalByAge(1).then(animal => {
        expect(animal).toEqual([{ name: 'Dorminhoco', age: 1, type: 'Dog' }]);
      });
    });
  });

  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne array com o objeto do animal', () => {
      expect.assertions(1);
      return findAnimalByAge(2).then(animal => {
        expect(animal).toEqual([{ name: 'Soneca', age: 2, type: 'Dog' }]);
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return findAnimalByAge(6).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});