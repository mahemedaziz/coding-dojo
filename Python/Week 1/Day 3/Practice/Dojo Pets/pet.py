# from ninja import Ninja
class Pet:
    def __init__(self,name , type , tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = 100
        self.energy = 100
    def sleep(self):
        self.energy += 25
        print(f"increase the {self.name} s energy by 25")
    def eat(self):
        self.energy += 5
        self.health += 10
        print(f"increases the {self.name} s energy by 5 & health by 10")
    def play(self):
        self.health += 5
        print(f"increases the {self.name} s health by 5")
    def noise(self):
        print(f"{self.name} make sound {self.tricks}.")