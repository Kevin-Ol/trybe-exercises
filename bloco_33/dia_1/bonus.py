import functools


# Exercício 1
def minNumber(list):
    return functools.reduce(lambda a, b: a if a < b else b, list)


print(minNumber([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))


# Exercício 2
def asterisk(lines):
    for line in range(lines):
        print((line + 1) * '*')


asterisk(5)


# Exercício 3
def sumToN(N):
    sum = 0
    for number in range(1, N + 1):
        sum += number
    return sum


print(sumToN(5))


# Exercício 4
def totalPrice(liters, type):
    gasoline = 2.5
    alcohol = 1.9
    if type == "G" and liters <= 20:
        return gasoline * liters * (1 - 0.03)
    elif type == "G" and liters > 20:
        return gasoline * liters * (1 - 0.05)
    elif type == "A" and liters <= 20:
        return alcohol * liters * (1 - 0.04)
    elif type == "A" and liters > 20:
        return alcohol * liters * (1 - 0.06)
    else:
        return 'Invalid values'


print(totalPrice(20, 'A'))