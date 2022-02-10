name = input("Digite seu nome: ")

last_letter = len(name)
for letter in name:
    print(name[0:last_letter])
    last_letter -= 1
