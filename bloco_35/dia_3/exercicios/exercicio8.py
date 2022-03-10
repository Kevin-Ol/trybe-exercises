# Exercício 8 Agora um desafio, vá ao site https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags e recupere as imagens de todas as bandeiras.
# Faça requisições para as URLs das imagens e escreva seus conteúdos em arquivos binários. São 206 ao total.

from parsel import Selector
import requests

URL_BASE = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
response = requests.get(URL_BASE)
selector = Selector(text=response.text)
flags_by_letter = selector.css("ul.gallery")
counter = 0

for letter in flags_by_letter:
    flags = letter.css("img::attr(src)").getall()
    for flag in flags:
        while flag.startswith("/"):
            flag = flag[1:]
        counter += 1
        print(flag)
    print("")
print(counter)
