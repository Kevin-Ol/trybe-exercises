# Exercício 1 Em um software monitor, que verifica a resiliência de outro software, precisamos saber qual o tempo máximo que um software permaneceu sem instabilidades. Para isto, a cada hora é feito uma requisição ao sistema e verificamos se está ok. Supondo um array que contenha os estados coletados por nosso software, calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.


def check_instability(array):
    counter = 0
    max_counter = 0

    for number in array:
        if number == 1:
            counter += 1
        else:
            counter = 0

        if counter > max_counter:
            max_counter = counter

    return max_counter
