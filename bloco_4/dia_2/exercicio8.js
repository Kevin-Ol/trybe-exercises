let result = []
for (let numero = 1 ; numero <= 25; numero +=1) {
    result.push(numero);
};
console.log(result);

let division = []

for (let index = 0; index < result.length ; index +=1) {
    division.push(result[index] / 2);
}

console.log(division)