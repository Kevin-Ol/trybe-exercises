import json
import csv

with open("books.json", "r") as file:
    books = json.load(file)
    for book in books:
        print(book["title"])