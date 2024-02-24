from pet import Pet
from ninja import Ninja

# Create an instance of a Pet
my_pet = Pet(name="Fluffy", type="Dog", tricks=["Sit", "Roll Over"])

# Create an instance of a Ninja and assign the pet to the ninja's pet attribute
my_ninja = Ninja(first_name="Hiro", last_name="Yamato", treats=5, pet_food=10, pet=my_pet)

# Have the Ninja feed, walk, and bathe their pet
my_ninja.feed()
my_ninja.walk()
my_ninja.bathe()
