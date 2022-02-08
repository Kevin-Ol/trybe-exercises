def imprime_lista(lista_de_elementos):
    original = lista_de_elementos.copy()
    replicado = lista_de_elementos[-2::-1]
    original.extend(replicado)
    for item in original:
        print(item)


imprime_lista([0, 1, 2, 3])
