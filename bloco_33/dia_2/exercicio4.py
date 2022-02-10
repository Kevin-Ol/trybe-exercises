import json
import csv

with open("books.json") as file:
    books = [json.loads(line) for line in file]
    books_len = len(books)
    total = {}
    for book in books:
        for category in book["categories"]:
            if total.get(category):
                total[category] += 1 / books_len
            else:
                total[category] = 1 / books_len

with open("books_percentage.csv", "w") as file2:
    header = ['category', 'percentage']
    rows = [
        [category, percentage]
        for category, percentage in total.items()
    ]
    writer = csv.writer(file2)
    writer.writerow(header)
    writer.writerows(rows)

with open("books_percentage_dic.csv", "w") as file3:
    header = ['category', 'percentage']
    writer = csv.DictWriter(file3, fieldnames=header)
    writer.writeheader()
    for category, percentage in total.items():
        row = {'category': category, 'percentage': percentage}
        writer.writerow(row)
