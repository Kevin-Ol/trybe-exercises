# Exercício 7 Faça o calculo de quantos livros publicados ( STATUS = PUBLISH ) temos em nosso banco de dados por categoria. Ordenando-os de forma decrescente de acordo com a quantidade.

from pymongo import MongoClient

with MongoClient() as client:
    db = client.library
    pipeline = [
        {"$match": {"status": "PUBLISH"}},
        {"$unwind": "$categories"},
        {"$group": {"_id": "$categories", "total": {"$sum": 1}} },
        {"$sort": {"total": -1}}
    ]
    for category in db.books.aggregate(pipeline):
        print(category["_id"], category["total"])

