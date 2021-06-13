const promise = new Promise ((resolve, reject) => {
    const randomNumber = () => (Math.floor(Math.random() * 51) ** 2)
    const numbers = [];
    for (let index = 0; index < 10; index += 1) {
        numbers.push(randomNumber());
    }
    const result = numbers.reduce((acc, curr) => acc + curr);
    (result > 8000) ? resolve(result) : reject()
})
.then((result) => [2, 3, 5, 10].map((number) => result / number))
.then((array) => console.log(array.reduce((acc, curr) => acc + curr)))
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'))
