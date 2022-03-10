# Exercício 4 Baseados em uma página contendo detalhes sobre um livro http://books.toscrape.com/catalogue/the-grand-design_405/index.html , faça a extração dos campos título, preço, descrição e url contendo a imagem de capa do livro.
# O preço deve vir somente valores numéricos e ponto. Ex: Â£13.76 -> 13.76 .
# A descrição de ter o sufixo "more..." removido quando existir.
# Os campos extraídos devem ser apresentados separados por vírgula. Ex: título,preço,descrição,capa.
from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue"
response = requests.get(URL_BASE + "/the-grand-design_405/index.html")
selector = Selector(text=response.text)
product = selector.css("article.product_page")

title = product.css("h1::text").get()
price = product.css("p.price_color::text").re_first(r"\d+\.\d{2}")

description = product.xpath("p//text()").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]

image = product.css("img::attr(src)").get()
image_url = f"{URL_BASE}/{image}"

# Exercício 5 Modifique o exercício anterior para retornar também quantos livros estão disponíveis apresentando como último campo no retorno.
availability = product.css(".availability::text").re_first("\d")

print(title, price, description, image_url, availability, sep="\n")
