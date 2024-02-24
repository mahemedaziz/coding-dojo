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




ninja1 = Ninja("Naruto" , "UZUMAKI" , "Lovely" , "kanicha" , "bito")
ninja1.walk()
ninja1.feed()
ninja1.bathe()

Pet1 = Pet("bito","ninjaAnimal","ULTRA-Sound")
Pet1.sleep()
Pet1.eat()
Pet1.play()
Pet1.noise()

