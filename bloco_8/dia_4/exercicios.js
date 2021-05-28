const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  const result = arrays.reduce((acc, current) => {
      current.forEach((element) => acc.push(element))
      return acc
  }, [])
  return result
}
// console.log(flatten())
assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);