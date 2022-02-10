import random

random_word = random.choice(["Rinoceronte", "Penteado", "Liberdade"])
scrambled_word = "".join(random.sample(random_word, len(random_word)))
print(scrambled_word)
for tentatives in range(3):
    tentative = input("Digite a palavra correta: ")
    if tentative == random_word:
        print("Parabéns, você acertou!")
        exit()
    else:
        print("Palavra incorreta, tente novamente")
print(f"Que pena, você não conseguiu acertar, a palvra era {random_word}")
