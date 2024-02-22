class User:
    def __init__(self,first_name,last_name,email,age,):
        self.first_name = first_name
        self.last_name = last_name
        self.age = age
        self.email = email
        self.is_rewards_member = False 
        self.gold_card_points = 0
    
    def display_info(self) :
        print(f"First Name : {self.first_name}")
        print(f"Last Name : {self.last_name}")
        print(f"Age : {self.age}")
        print(f"Reward member : {self.is_rewards_member}")
        print(f"Gold card : {self.gold_card_points}")
        return self
    
    
    def enroll(self):
        if self.is_rewards_member == True :
            print("User already a member")
            return False
        else:
            self.is_rewards_member = True 
            self.gold_card_points = 200
        return self
    
    def spend_points(self, amount):
        if self.gold_card_points>= amount:
            self.gold_card_points = 200 - amount
        else:
            print("YOU HAVE USED ALL YOUR POINTS!!")
        return self
    
user = User("Mohamed Aziz", "Berrais", "azizBerrais@outlook.com", 31 ,)
# user.display_info()
# user.enroll()
# user.display_info()
# user.spend_points(40)
# user.display_info()
user.display_info().enroll().spend_points(40).display_info()