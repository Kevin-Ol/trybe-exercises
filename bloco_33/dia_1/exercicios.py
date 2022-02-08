import functools


# Exercício 1
def maior(num1, num2):
    return num1 if num1 > num2 else num2


print(maior(20, 3))


# Exercício 2
def sum(list):
    return functools.reduce(lambda a, b: a+b, list)


print(sum([1, 2, 3, 4, 5]))


def asterisk(lines):
    for line in range(lines):
        print(lines * '*')


asterisk(5)


def maxName(list):
    return functools.reduce(lambda a, b: a if len(a) > len(b) else b, list)


print(maxName(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))


def tintPrice(area):
    tintRendiment = 1 * 3 * 18
    tintPrice = 80
    tintTins = area // tintRendiment
    if tintTins * tintRendiment < area:
        tintTins += 1
    return (tintTins, tintTins * tintPrice)


print(tintPrice(55))


def triangle(side1, side2, side3):
    if side1 > side2 + side3 or side2 > side1 + side3 or side3 > side1 + side2:
        return 'não é triangulo'
    if side1 == side2 == side3:
        return 'Equilátero'
    if side1 != side2 != side3:
        return 'Escaleno'
    return 'Isósceles'


print(triangle(60, 10, 50))
