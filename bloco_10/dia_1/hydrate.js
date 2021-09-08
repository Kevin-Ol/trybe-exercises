const hydrate = (string) => {
    const stringToArrray = string.split(' ')
    const stringToNumbers =  stringToArrray.map((word) => Number(word));
    const numbers = stringToNumbers.filter((element) => element > 0);
    const total = numbers.reduce((acc, cur) => acc + cur);
    if (total === 1) {
        return `${total} copo de água`;
    }
    return `${total} copos de água`;
}

module.exports = hydrate;