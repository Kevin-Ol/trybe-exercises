class Television:
    def __init__(self, size):
        self.__size = size
        self.__volume = 50
        self.__channel = 1
        self.__on = False

    def increase_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def decrease_volume(self):
        if self.__volume > 0:
            self.__volume -= 1

    def change_channel(self, channel):
        if channel > 99 or channel < 1:
            raise ValueError('Canal inválido')
        self.__channel = channel

    def turn_on(self):
        self.__on = not self.__on
