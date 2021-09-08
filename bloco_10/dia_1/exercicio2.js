function encode(string) {
    // seu código aqui
    let resposta = '';
    let codigo = {
      a: 1,
      e: 2,
      i: 3,
      o: 4,
      u: 5,
    };
    for (let index in string) {
      if (string[index] in codigo) {
        resposta += codigo[string[index]];
      } else {
        resposta += string[index];
      }
    }
    return resposta;
  }
  
  function decode(string) {
    // seu código aqui
    let resposta = '';
    let codigo = {
      1: 'a',
      2: 'e',
      3: 'i',
      4: 'o',
      5: 'u',
    };
    for (let index in string) {
      if (string[index] in codigo) {
        resposta += codigo[string[index]];
      } else {
        resposta += string[index];
      }
    }
    return resposta;
  }

  module.exports = {
      encode,
      decode,
  }