

let colors = ['black', 'white', 'blue', 'red', 'yellow', 'grey']

for (let color = 0; color < colors.length ; color +=1) {
    let circle = document.createElement('div');
    circle.style.backgroundColor = colors[color];
    circle.style.height = '30px';
    circle.style.width = '30px';
    circle.style.border = '1px solid black';
    circle.style.borderRadius = '100%';
    circle.style.display = 'inline-block';
    circle.style.verticalAlign = 'middle';
    circle.style.marginLeft = '10px';
    document.querySelector('.backgroundColor').appendChild(circle);
}


