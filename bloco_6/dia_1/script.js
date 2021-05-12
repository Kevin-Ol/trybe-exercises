let states = {   'AC': 'Acre',
'AL': 'Alagoas',
'AP': 'Amapá',
'AM': 'Amazonas',
'BA': 'Bahia',
'CE': 'Ceará',
'DF': 'Distrito Federal',
'ES': 'Espírito Santo',
'GO': 'Goías',
'MA': 'Maranhão',
'MT': 'Mato Grosso',
'MS': 'Mato Grosso do Sul',
'MG': 'Minas Gerais',
'PA': 'Pará',
'PB': 'Paraíba',
'PR': 'Paraná',
'PE': 'Pernambuco',
'PI': 'Piauí',
'RJ': 'Rio de Janeiro',
'RN': 'Rio Grande do Norte',
'RS': 'Rio Grande do Sul',
'RO': 'Rondônia',
'RR': 'Roraíma',
'SC': 'Santa Catarina',
'SP': 'São Paulo',
'SE': 'Sergipe',
'TO': 'Tocantins'
}

for (let state = 0; state < Object.keys(states).length; state += 1) {
    let option = document.createElement('option');
    let initials = Object.keys(states)[state];
    let name = states[initials];
    option.value = initials;
    option.innerText = name;
    if (name === 'Sergipe') {
        option.selected = true;
    }
    document.querySelector('#state').appendChild(option)
}



function vdata (data) {
    if (data.length !== 10) {
        alert('Data inválida')
    } else if (parseInt(data[0] + data[1]) < 1 || parseInt(data[0] + data[1]) > 31) {
        alert('Data inválida')
    } else if (parseInt(data[3] + data[4]) < 1 || parseInt(data[3] + data[4]) > 12) {
        alert('Data inválida')
    } else if (parseInt(data[6] + data[7] + data[8] + data[9]) < 0) {
        alert('Data inválida')
    }
}

document.querySelector('#name').addEventListener('keypress', function (event) {
    if (event.target.value.length === 40) { 
        event.preventDefault()
        alert('Limite de 40 caracteres')
    }
})

document.querySelector('#email').addEventListener('keypress', function (event) {
    if (event.target.value.length === 50) { 
        event.preventDefault()
        alert('Limite de 50 caracteres')
    }
})

document.querySelector('#cpf').addEventListener('keypress', function (event) {
    if (event.target.value.length === 11) { 
        event.preventDefault()
        alert('Limite de 11 caracteres')
    }
})

document.querySelector('#adress').addEventListener('keypress', function (event) {
    if (event.target.value.length === 200) { 
        event.preventDefault();
        alert('Limite de 200 caracteres');
    }
})

document.querySelector('#city').addEventListener('keypress', function (event) {
    if (event.target.value.length === 28) { 
        event.preventDefault();
        alert('Limite de 28 caracteres');
    }
})

document.querySelector('#abstract').addEventListener('keypress', function (event) {
    if (event.target.value.length === 1000) { 
        event.preventDefault();
        alert('Limite de 1000 caracteres');
    }
})

document.querySelector('#job').addEventListener('keypress', function (event) {
    if (event.target.value.length === 40) { 
        event.preventDefault();
        alert('Limite de 40 caracteres');
    }
})

document.querySelector('#description').addEventListener('keypress', function (event) {
    if (event.target.value.length === 500) { 
        event.preventDefault();
        alert('Limite de 500 caracteres');
    }
})

document.querySelector('#date').addEventListener('keypress', function vdata (event) {
        data = event.target.value
    if (data.length === 10) {
        event.preventDefault();
        alert('Data inválida');
    } else if (parseInt(data[0] + data[1]) < 0 || parseInt(data[0] + data[1]) > 31) {
        event.preventDefault();
        alert('Dia inválido');
    } else if (parseInt(data[3] + data[4]) < 0 || parseInt(data[3] + data[4]) > 12) {
        event.preventDefault();
        alert('Mês inválido');
    } else if (parseInt(data[6] + data[7] + data[8] + data[9]) < 0) {
        event.preventDefault();
        alert('Ano inválido');
    } else if (data.length > 2 && data[2] !== '/') { 
        event.preventDefault();
        alert('Esperado separador "/"');      
    } else if (data.length > 5 && data[5] !== '/') { 
        event.preventDefault();
        alert('Esperado separador "/"');   
    }
})