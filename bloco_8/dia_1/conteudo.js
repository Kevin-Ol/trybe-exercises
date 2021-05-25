const wakeUp = () => 'Acordando!!';
const cofee = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(cofee);
doingThings(sleep);