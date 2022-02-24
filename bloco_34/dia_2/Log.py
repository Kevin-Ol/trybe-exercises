from abc import ABC, abstractmethod
from datetime import datetime


class Log_manipulator(ABC):
    @classmethod
    @abstractmethod
    def log(cls, message):
        raise NotImplementedError


class File_log(Log_manipulator):
    @classmethod
    def log(cls, message):
        with open('log.txt', 'a') as file:
            print(message, file=file)


class Print_log(Log_manipulator):
    @classmethod
    def log(cls, message):
        print(message)


class Log:
    def __init__(self, manipulators):
        self.__manipulators = manipulators

    def add_manipulator(self, manipulator):
        self.__manipulators.add(manipulator)

    def __format(self, level, message):
        date = datetime.now().strftime('%d/%m/%Y %H:%M:%S')
        return f"[{level} - {date}: {message}]"

    def __log(self, level, message):
        for manipulator in self.__manipulators:
            manipulator.log(self.__format(level, message))

    def info(self, message):
        self.__log('INFO', message)

    def alert(self, message):
        self.__log('ALERTA', message)

    def error(self, message):
        self.__log('ERRO', message)

    def debug(self, message):
        self.__log('DEBUG', message)
