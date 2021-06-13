let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

//console.log('Bem-vinda, ' + info.personagem);

info['recorrente'] = 'sim';

//console.log(info)

// for (let key in info) {
//     console.log(key)
// };

// for (let key in info) {
//     console.log(info[key])
// };

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'sim'
  };

for (let key in info){
    if (info[key] === info2[key] && info[key] === 'sim' && info2[key] === 'sim'){
        console.log('Ambos recorrentes')
    } else {
        console.log(info[key] + ' e ' + info2[key])
    };
};