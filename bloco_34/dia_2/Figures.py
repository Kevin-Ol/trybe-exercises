from abc import ABC, abstractmethod
from math import pi as PI


class Figure(ABC):
    @abstractmethod
    def area():
        raise NotImplementedError

    @abstractmethod
    def perimeter():
        raise NotImplementedError


class Square(Figure):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side ** 2

    def perimeter(self):
        return self.side * 4


class Rectangle(Figure):
    def __init__(self, base, height):
        self.base = base
        self.height = height

    def area(self):
        return self.base * self.height

    def perimeter(self):
        return 2 * (self.base + self.height)


class Circle(Figure):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return PI * (self.radius ** 2)

    def perimeter(self):
        return 2 * PI * self.radius
