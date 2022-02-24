# Exercício 6: Suponha que você está trabalhando em um sistema de orçamentos que faz cálculos de impostos e precisa ser refatorado para adicionar novos, que no caso são o PIS (0,65%) e o COFINS (3%). Mas durante a refatoração, você se depara com uma má prática de código. Encontre essa má prática e a solucione em conjunto com a refatoração.
from abc import ABC


class Orcamento:
    def __init__(self, valor):
        self.valor = valor

    def calcular_imposto(self, imposto):
        return imposto.calcular(self.valor)


class Imposto(ABC):
    @classmethod
    def calcular(cls, valor):
        raise NotImplementedError


class ISS(Imposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.1


class ICMS(Imposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.06


class PIS(Imposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.065


class COFINS(Imposto):
    @classmethod
    def calcular(cls, valor):
        return valor * 0.03


orcamento = Orcamento(1000)
print(f"ISS: {orcamento.calcular_imposto(ISS)}")
print(f"ICMS: {orcamento.calcular_imposto(ICMS)}")
print(f"PIS: {orcamento.calcular_imposto(PIS)}")
print(f"COFINS: {orcamento.calcular_imposto(COFINS)}")
