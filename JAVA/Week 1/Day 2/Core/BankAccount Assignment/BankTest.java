public class BankTest {
    public static void main(String[] args) {
        // Create 3 bank accounts
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();
        BankAccount account3 = new BankAccount();

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and
        // display the balance each time
        System.out.println("Deposit Test:");
        account1.deposit(300.0, "checkingBalance");
        account1.deposit(300.0, "savingsBalance");
        account2.deposit(1000.0, "savingsBalance");
        account3.deposit(2000.0, "savingsBalance");
        // - each deposit should increase the amount of totalMoney
        System.out.println("Balance after deposite:");
        account1.displayAccountBalance("account1");
        account2.displayAccountBalance("account2");
        account3.displayAccountBalance("account3");

        // System.out.println("Account 1 - Checking Balance:" +
        // account1.getCheckingBalance());
        // System.out.println("Account 1 - Saving Balance:" +
        // account1.getSavingsBalance());

        // displayAccountBalance(account1);
        // System.out.println("Account 2 - Saving Balance:" +
        // account2.getSavingsBalance());
        // displayAccountBalance(account2);
        // System.out.println("Account 3 - Saving Balance:" +
        // account3.getSavingsBalance());
        // displayAccountBalance(account3);
        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account
        // and display the remaining balance
        System.out.println("Withdrawal Test:");
        account1.deposit(150.0, "checkingBalance");
        account2.deposit(500.0, "savingsBalance");
        account3.deposit(1000.0, "savingsBalance");
        // - each withdrawal should decrease the amount of totalMoney
        System.out.println("Balance after Withdrawal:");
        System.out.println("Account 1 - Checking Balance:" + account1.getCheckingBalance());
        System.out.println("Account 2 - Saving Balance:" + account2.getSavingsBalance());
        System.out.println("Account 3 - Saving Balance:" + account3.getSavingsBalance());

        // Static Test (print the number of bank accounts and the totalMoney)
        System.out.println("\nStatic Test:");
        System.out.printf("Number of bank accounts: %d\n", BankAccount.getAccounts());
        System.out.printf("Total money in bank: $%.2f\n", BankAccount.getTotalMoney());

    }

}
