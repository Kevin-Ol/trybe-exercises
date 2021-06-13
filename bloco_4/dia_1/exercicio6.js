let peca = "BISPO";

switch (peca.toLowerCase()){
    case "rei":
        console.log("Se movimenta e captura na horizontal, vertical ou diagonal 1 casa por vez");
        break;
    case "rainha":
        console.log("Se movimenta e captura na horizontal, vertical ou diagonal quantas casas quiser");
        break;
    case "torre":
        console.log("Se movimenta e captura na horizontal ou vertical quantas casas quiser");
        break;
    case "bispo":
        console.log("Se movimenta e captura na diagonal quantas casas quiser");
        break;
    case "cavalo":
        console.log("Se movimenta e captura na forma de L, 2 casas numa direção e uma para a direita ou esquerda dessa direção, ortogonalmente");
        break;
    case "peão":
        console.log("Se movimenta apenas na vertical e para a frente 1 casa por vez, podendo ser 2 casas caso seja seu primeiro movimento, e captura na diagonal");
        break;
    default:
        console.log("Não é uma peça de xadrez");
}