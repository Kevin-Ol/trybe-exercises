import statistics


class Statistic:
    @classmethod
    def mean(cls, list):
        return statistics.mean(list)

    @classmethod
    def mode(cls, list):
        return statistics.mode(list)

    @classmethod
    def median(cls, list):
        return statistics.median(list)
