let angulo1 = 30;
let angulo2 = 60;
let angulo3 = 90;

if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0){
    console.log("Um dos ângulos é negativo");
} else if (angulo1 + angulo2 + angulo3 === 180){
    console.log(true);
} else {
    console.log(false);
}
