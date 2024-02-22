class BankAccount:
    bank_name = "HELL"
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        self.balance += amount
        return self
        # your code here
    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance-= amount
        else:
            print("Fonds insuffisants : Facture des frais de 5 $")
            self.balance-= 5
        return self
        # your code here
    def display_account_info(self):
        print(f"sold is {self.balance} $")
        return self
        # your code here
    def yield_interest(self):
        self.balance+=self.balance*self.int_rate
        return self
        # your code here
    @classmethod
    def print_all_accounts(cls,*accounts,):
        for account in accounts:
            account.display_account_info()

count1 = BankAccount(0.32,2500)
count2 = BankAccount(0.2,1000)


count1.deposit(50)
count1.deposit(50)
count1.deposit(50)
count1.withdraw(5000)

# count1.yield_interest()
# count1.display_account_info()

# count1.deposit(150).withdraw(2000).yield_interest().display_account_info()


count2.deposit(500)
count2.deposit(1000)
count2.withdraw(200)
count2.withdraw(400)
count2.withdraw(100)
count2.withdraw(300)

# count2.yield_interest()
# count2.display_account_info()

BankAccount.print_all_accounts(count1,count2)