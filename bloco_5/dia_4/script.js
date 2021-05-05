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
    circle.addEventListener('click', function () {
        let change = circle.style.backgroundColor
        document.body.style.backgroundColor = change
    })
    circle.addEventListener('mouseenter', function (event) {
        event.target.style.height = '45px';
        event.target.style.width = '45px';
    })
    circle.addEventListener('mouseleave', function (event) {
        event.target.style.height = '30px';
        event.target.style.width = '30px';
    })
}

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
    document.querySelector('.textColor').appendChild(circle);
    circle.addEventListener('click', function () {
        let change = circle.style.backgroundColor
        document.body.style.color = change
    })
    circle.addEventListener('mouseenter', function (event) {
        event.target.style.height = '45px';
        event.target.style.width = '45px';
    })
    circle.addEventListener('mouseleave', function (event) {
        event.target.style.height = '30px';
        event.target.style.width = '30px';
    })
}

let sizes = ['16px', '18px', '20px', '22px', '24px'];

for (let size = 0; size < sizes.length; size +=1) {
    let button = document.createElement('button');
    button.innerHTML = sizes[size];
    button.style.fontSize = parseInt(sizes[size]) + 'px';
    button.style.backgroundColor = document.body.style.backgroundColor;
    document.querySelector('.fontSize').appendChild(button);
    button.addEventListener('click', function () {
        document.body.style.fontSize = sizes[size];
    })
}




