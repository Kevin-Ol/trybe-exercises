let megaSenaNumbers = [];

let firstNumber = Math.ceil(Math.random() *60);
let secondNumber = Math.ceil(Math.random() *60);
let thirdNumber = Math.ceil(Math.random() *60);
let fourthNumber = Math.ceil(Math.random() *60);
let fifthNumber = Math.ceil(Math.random() *60);
let sixthNumber = Math.ceil(Math.random() *60);

megaSenaNumbers = [fifthNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];

let turma12Play = [35, 8, 22, 14, 2, 60];

let numberOfHits = 0;

for (let indexMega = 0; indexMega < megaSenaNumbers.length; indexMega += 1) {
    for (let indexPlay = 0; indexPlay < turma12Play.length; indexPlay += 1) {
        if (megaSenaNumbers[indexMega] === turma12Play[indexPlay]) {
            numberOfHits +=1;
        };
    };
};

console.log(megaSenaNumbers);
console.log(turma12Play);
console.log(numberOfHits);