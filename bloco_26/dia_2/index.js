// Crie uma função que recebe três parâmetros retorna uma Promise .
function sum3(num1, num2, num3) {
  return new Promise(function (resolve, reject) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number'){
      reject('Insira 3 números')
    }
    const result = (num1 + num2) * num3;
    if (result < 50 ) reject('Valor muito baixo');
    resolve(result);
  })
}

function sum3(num1, num2, num3) {
  return new Promise(function (resolve, reject) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number'){
      reject('Insira 3 números')
    }
    const result = (num1 + num2) * num3;
    if (result < 50 ) reject('Valor muito baixo');
    resolve(result);
  })
}

// Escreva um código para consumir a função construída no exercício anterior.
// Reescreva o código do exercício anterior para que utilize async/await .
async function randomNumbers() {
  const num1 = Math.floor(Math.random() * 100 + 1);
  const num2 = Math.floor(Math.random() * 100 + 1);
  const num3 = Math.floor(Math.random() * 100 + 1);
  try {
    console.log(await sum3(num1, num2, num3))
  } catch (error) {
    console.log(error)
  }
}

randomNumbers();
