import random


with open("words.txt", "r") as words:
    words_list = words.read().strip().split("\n")

random_word = random.choice(words_list)
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
