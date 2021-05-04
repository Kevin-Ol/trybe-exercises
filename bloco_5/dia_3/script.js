function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  // Exercício 01
function createDaysOfTheMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let monthDays = document.querySelector('#days');
    for (let day of dezDaysList) {
        let monthDayItem = document.createElement('li');
        monthDayItem.innerHTML = day;

        if (day === 24 || day === 31) {
            monthDayItem.className = 'day holiday';
        } else if (day === 4 || day === 11 || day === 18) {
            monthDayItem.className = 'day friday';
        } else if (day === 25) {
            monthDayItem.className = 'day holiday friday';
        } else {
            monthDayItem.className = 'day';
        }

        monthDays.appendChild(monthDayItem);
    }
}

createDaysOfTheMonth();

// Exercício 02
function holidayButton() {
    button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerHTML = 'Feriados'
    document.querySelector('.buttons-container').appendChild(button);
}

holidayButton();

// Exercício 03
document.querySelector('#btn-holiday').addEventListener ('click', function () {
    let holidays = document.getElementsByClassName('holiday');
    for (let day in holidays) {
        if (holidays[day].style.backgroundColor === 'red') {
            holidays[day].style.backgroundColor = 'rgb(238,238,238)';
        } else {
            holidays[day].style.backgroundColor = 'red'
        }
    };
});

// Exercício 04
function fridayButton() {
    button2 = document.createElement('button');
    button2.id = 'btn-friday';
    button2.innerHTML = 'Sexta-feira'
    document.querySelector('.buttons-container').appendChild(button2);
}

fridayButton();

// Exercício 05
document.querySelector('#btn-friday').addEventListener ('click', function () {
    let fridays = document.getElementsByClassName('friday');
    let numbers = [4, 11, 18, 25];
    for (let day in fridays) {
        if (parseInt(fridays[day].innerHTML) === numbers[day]) {
            fridays[day].innerHTML = 'Sexta-feira';
        } else {
            fridays[day].innerHTML = numbers[day];
        }
    };
});

// Exercício 06

function zoomIn () {
    let monthDaysItems = document.getElementsByClassName('day')
for (let day = 0; day <  monthDaysItems.length; day += 1) {
    monthDaysItems[day].addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '50px'
    }) 
}
    }
zoomIn ()

function zoomOut () {
    let monthDaysItems = document.getElementsByClassName('day')
for (let day = 0; day <  monthDaysItems.length; day += 1) {
    monthDaysItems[day].addEventListener('mouseleave', function (event) {
        event.target.style.fontSize = '16px'
    }) 
}
    }
zoomOut ()


//GABARITO
// function zoomIn() {
//     let monthDays = document.querySelector('#days');

//     monthDays.addEventListener('mouseover', function (event) {
//         event.target.style.fontSize = '50px'
//     })
// }

// zoomIn()

// Exercício 07
function tasks (name) {
    let task = document.createElement('span')
    document.querySelector('.my-tasks').appendChild(task);
    task.innerHTML = name;
}

tasks ('Cozinhar')

// // Exercício 08
function taskColor (color) {
    let element = document.createElement('div');
    document.querySelector('.my-tasks').appendChild(element);
    element.className = 'task';
    element.style.backgroundColor = color ;
}

taskColor ('green')

// // Exercício 09
let selectColor = document.querySelector('.my-tasks').lastElementChild
selectColor.addEventListener('click', function (event) {
    if (event.target.className === 'task') {
        event.target.className = 'task selected';
    }
    if (event.target.className === 'task selected') {
        event.target.className = 'task';
    }
})