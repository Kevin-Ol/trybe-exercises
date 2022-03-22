# Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.


def biggest_int(list):
    if len(list) == 1:
        return list[0]

    print(list)
    if list[0] > list[-1]:
        return biggest_int(list[: len(list) - 1])
    else:
        return biggest_int(list[1:])
