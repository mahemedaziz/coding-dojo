class BankAccount:
    # bank_name = "HELL"

    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance-= amount
        else:
            print("Fonds insuffisants : Facture des frais de 5 $")
            self.balance-= 5
        return self

    def display_account_info(self):
        print(f"sold is {self.balance} $")
        return self

    def yield_interest(self):
        self.balance+=self.balance*self.int_rate
        return self
# ----------------------------------------------------------------------------
# class User:
#     def __init__(self, name, email):
#         self.name = name
#         self.email = email
#         self.account = BankAccount(int_rate=0, balance=0)
    
#     # other methods
    
#     def make_deposit(self, amount):
#         self.account.deposit(amount)
#         return self
#     def make_withdraw(self, amount):
#         self.account.withdraw(amount)
#         return self
#     def display_user_balance(self):
#         print(f"{self.name} your sold is {self.balance} $")
#         return self

class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.accounts = {}

    def create_account(self, account_name, int_rate=0, balance=0):
        self.accounts[account_name] = BankAccount(int_rate, balance)

    def make_deposit(self, account_name, amount):
        if account_name in self.accounts:
            self.accounts[account_name].deposit(amount)
        else:
            print("Account not found")

    def make_withdrawal(self, account_name, amount):
        if account_name in self.accounts:
            self.accounts[account_name].withdraw(amount)
        else:
            print("Account not found")

    def display_user_balance(self, account_name):
        if account_name in self.accounts:
            self.accounts[account_name].display_account_info()
        else:
            print("Account not found")
    def transfer_money(self, amount, other_user, from_account, to_account):
        if from_account in self.accounts and to_account in other_user.accounts:
            if self.accounts[from_account].balance >= amount:
                self.accounts[from_account].withdraw(amount)
                other_user.accounts[to_account].deposit(amount)
                print("Transfer successful")
            else:
                print("Insufficient funds")
        else:
            print("Account not found")
# Example usage
# user1 = User("John Doe", "john@example.com")
# user1.create_account("Savings", int_rate=0.02, balance=1000)
# user1.create_account("Checking", balance=500)

# user1.make_deposit("Savings", 500)
# user1.make_withdrawal("Checking", 200)
# user1.display_user_balance("Savings")  # Output: Balance: 1500
# user1.display_user_balance("Checking")  # Output: Balance: 300

# # Example usage
# user1 = User("John Doe", "john@example.com")
# user1.create_account("Savings", int_rate=0.02, balance=1000)
# user1.create_account("Checking", balance=500)

# user2 = User("Jane Smith", "jane@example.com")
# user2.create_account("Savings", int_rate=0.01, balance=2000)

# user1.transfer_money(300, user2, "Checking", "Savings")
# user1.display_user_balance("Checking")  # Output: Balance: 200
# user2.display_user_balance("Savings")  # Output: Balance: 2300