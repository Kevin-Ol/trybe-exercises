# Exercício 2: Transforme o algoritmo criado acima em recursivo.


def even_quantity_recursive(n):
    if n == 0:
        return 0

    if n % 2 == 0:
        return 1 + even_quantity_recursive(n - 1)
    else:
        return even_quantity_recursive(n - 1)
