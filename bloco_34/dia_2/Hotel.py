from operator import attrgetter


class Room:
    def __init__(self, number, floor, guest_quantity, price):
        self.number = number
        self.floor = floor
        self.guest_quantity = guest_quantity
        self.price = price
        self.reserved = False


class Guest:
    def __init__(self, name, cpf):
        self.name = name
        self.cpf = cpf


class Reserve:
    def __init__(self, room, guest):
        self.room = room
        self.guest = guest


class Hotel:
    def __init__(self, name, rooms, reserves):
        self.name = name
        self.rooms = rooms
        self.reserves = reserves

    def available_rooms(self, guest_quantity):
        return sorted(
            [
                room for room in self.rooms
                if room['guest_quantity'] >= guest_quantity and
                not room.reserved
            ],
            key=attrgetter('quantidade_de_hospedes')
        )

    def check_in(self, *guests):
        try:
            room = self.available_rooms(len(guests))[0]
            room.reserved = True
            for guest in guests:
                self.reserves.append(Reserve(room, guest))
        except IndexError:
            raise IndexError('No rooms available')

    def check_out(self, room):
        room.reserved = False
        self.reserves = [
            reserve for reserve in self.reserves
            if reserve.room.number != room.number
        ]
