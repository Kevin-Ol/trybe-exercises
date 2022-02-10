numbers = input("Digite números separados por espaço:")

list_numbers = numbers.split(' ')
sum = 0
for number in list_numbers:
    if number.isdigit():
        sum += int(number)
    else:
        print(f'Erro ao somar valores, "{number}" é um valor inválido')
        exit()
print(sum)
