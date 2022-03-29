# Exercício 2 Em um jogo de baralho, as cartas estão representadas por um array numérico. Para iniciar o jogo devemos embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções.

# Exemplo 1:
# cartas = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
# cartas = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]


def cards(array):
    mid_index = len(array) // 2
    array1 = array[:mid_index]
    array2 = array[mid_index:]
    result = []

    for index in range(mid_index):
        result += [array1[index], array2[index]]

    return result
