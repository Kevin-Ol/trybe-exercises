# Importe o arquivo books.json no MongoDB antes de responder as próximas questões.
#     mongoimport --db library books.json --jsonArray
# Exercício 6 Escreva um programa que se conecte ao banco de dados library e liste os livros da coleção books para uma determinada categoria recebida por uma pessoa usuária. Somente o título dos livros deve ser exibido.

from pymongo import MongoClient

category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.library
    books = list(db.books.find({"categories": category}))
    for book in books:
        print(book["title"])
