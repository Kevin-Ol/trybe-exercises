const techList = (array, name) => {
    if (array.length === 0) {
        return 'Vazio!'
    } 
    const techSorted = array.sort();
    return techSorted.map((tech) => ({ tech, name }));
};

module.exports = techList;