import json
import random


with open("pokemons.json") as file:
    pokemons = json.load(file)

pokemons_names = [pokemon["name"] for pokemon in pokemons["results"]]
random_pokemon = random.choice(pokemons_names)

letters = 0
while True:
    print(f"Adivinhe o pokemon: {random_pokemon[0:letters]}")
    tentative = input("O pokemon é: ")
    if tentative == random_pokemon:
        print(f"Parabéns, você acertou, o pokemon é {random_pokemon}")
        exit()
    else:
        letters += 1
