const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.throws(() => {
    sum(4, '5')
});
assert.throws(() => {
    sum(4, '5')
}, /^Error: parameters must be numbers$/);

// const assert = require('assert');
//////////////////////////////////////////////////////////////////
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4] );
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4] )
const arrayTest = [1, 2, 3, 4]
myRemove(arrayTest, 3)
assert.deepStrictEqual(arrayTest, [1, 2, 3, 4])
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4] );
/////////////////////////////////////////////////////////////////////
// const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}
// console.log(myRemoveWithoutCopy([1, 2, 3, 4], 3))
// implemente seus testes aqui
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4] );
const arrayTest2 = [1, 2, 3, 4];
myRemoveWithoutCopy(arrayTest2, 3);
// assert.deepStrictEqual(arrayTest2, [1, 2, 3, 4])
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4] );
////////////////////////////////////////////////////////////////////////////////////
// const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(9), 'fizz');
assert.strictEqual(myFizzBuzz(10), 'buzz');
assert.strictEqual(myFizzBuzz(11), 11);
assert.strictEqual(myFizzBuzz('9'), false);
//////////////////////////////////////////////////////////////////////

// const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);
assert.notDeepStrictEqual(obj2, obj3);
//////////////////////////////////////////////////////////

// const assert = require('assert');
// escreva a função addOne aqui
const addOne = (array) => {
    let result = [];
    for (let index in array) {
        result.push(array[index] + 1)
    }
    return result;
}

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// // const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);
///////////////////////////////////////////////////////////////
// const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (array) => {
    let result = [];
    for (let index in array) {
        result.push(array[index].length);
    }
    return result;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);