# Exercício 5: Escreva um algoritmo recursivo que identifica se um número é primo.


def divisor(n, div):
    if div == n:
        return True

    if n % div == 0:
        return False

    return divisor(n, div + 1)


def prime(n):
    return n > 1 and divisor(n, 2)
