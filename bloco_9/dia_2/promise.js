const getPower = () => {
    const randomNumber = () => (Math.floor(Math.random() * 51) ** 2)
    const numbers = [];
    for (let index = 0; index < 10; index += 1) {
        numbers.push(randomNumber());
    }
    const result = numbers.reduce((acc, curr) => acc + curr);
    if (result > 8000) {
        // console.log(result)
        throw new Error ();
    }
    return result
}

const divideAndSum = (power) => [2, 3, 5, 10].map((number) => power / number)
                                             .reduce((acc, curr) => acc + curr);


const fetchPromise = async () => {
    try {
        const power = await getPower();
        const sum = await divideAndSum(power)
        console.log(`Divide e soma: ${sum}`)
    } catch (error)  {
        console.log('É mais de oito mil! Essa promise deve estar quebrada!')
    }
}

fetchPromise()