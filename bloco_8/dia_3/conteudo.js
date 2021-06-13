const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts = products.map((product, index) => ({[product]: prices[index]}))

// console.log(listProducts)

const s = "1 banana + 1 pineapple + 3 oranges";
const result = s.match(/\d+/g).map((number => parseInt(number)))
console.log(result)

let a = [1, 2, 3]
a.forEach(number => {
  return  number * 2
})
console.log(a)