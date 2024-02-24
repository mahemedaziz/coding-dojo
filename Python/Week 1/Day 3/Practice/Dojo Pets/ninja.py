# from pet import Pet

class Ninja:
    def __init__(self,first_name , last_name , treats , pet_food , pet):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
        
    def walk(self):
        print(f"{self.last_name} {self.first_name} se proméne avec son chien {self.pet} .")
    def feed(self):
        print(f"{self.last_name} {self.first_name} nourrit son chien {self.pet} avec {self.pet_food}.")
    def bathe(self):
        print(f"{self.last_name} {self.first_name} nettoie son chien {self.pet} .")