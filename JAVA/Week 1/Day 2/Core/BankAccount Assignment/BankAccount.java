import java.util.Random;

public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;// Solde du compte courant
    private double savingsBalance; // Solde du compte d'épargne
    private String accountNumber; // Numéro de compte

    private static int accounts = 0;
    private static double totalMoney = 0.0; // refers to the sum of all bank account checking and savings balances

    // CONSTRUCTOR
    // Be sure to increment the number of accounts
    public BankAccount() {
        generateAccountNumber(); // Générer un numéro de compte aléatoire
        this.checkingBalance = 0.0;
        this.savingsBalance = 0.0;
        accounts++;
    }

    // CONSTRUCTEUR SURCHARGÉ
    public BankAccount(double checkingBalance, double savingsBalance) {
        generateAccountNumber(); // Générer un numéro de compte aléatoire
        this.checkingBalance = checkingBalance;
        this.savingsBalance = savingsBalance;
        accounts++;
        totalMoney = checkingBalance + savingsBalance;
    }

    // Méthode pour générer un numéro de compte aléatoire à dix chiffres
    private void generateAccountNumber() {
        Random random = new Random();
        StringBuilder accountNumberBuilder = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            accountNumberBuilder.append(random.nextInt(10));
        }
        accountNumber = accountNumberBuilder.toString();
    }

    // GETTERS
    // for checking, savings, accounts, and totalMoney
    public double getCheckingBalance() {
        return checkingBalance;
    }

    public double getSavingsBalance() {
        return savingsBalance;
    }

    public static int getAccounts() {
        return accounts;
    }

    public static double getTotalMoney() {
        return totalMoney;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings
    // account
    public void deposit(double amount, String accountType) {
        if (amount > 0) {
            if (accountType.equals("checkingBalance")) {
                checkingBalance += amount;
            } else if (accountType.equals("savingsBalance")) {
                savingsBalance += amount;
            } else {
                System.out.println("Type de compte invalide.");
                return;
            }
            totalMoney += amount;
        } else {
            System.out.println("Le montant doit être supérieur à zéro.");
        }
    }

    // withdraw
    // - users should be able to withdraw money from their checking or savings
    // account
    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney

    public void withdraw(double amount, String accountType) {
        if (amount > 0) {
            if (accountType.equals("checkingBalance")) {
                if (checkingBalance >= amount) {
                    checkingBalance -= amount;
                    totalMoney -= amount;
                } else {
                    System.out.println("Fond insuffisant dans le compte courant");
                }
            } else if (accountType.equals("savingsBalance")) {
                if (savingsBalance >= amount) {
                    savingsBalance -= amount;
                    totalMoney -= amount;
                } else {
                    System.out.println("Fond insuffisant dans le compte d'épargne");
                }
            } else {
                System.out.println("Type de compte invalide.");
            }
        } else {
            System.out.println("Le montant doit être supérieur à zéro.");
        }
    }

    // getBalance
    // - display total balance for checking and savings of a particular bank account
    public void getBalance() {
        System.out.println("Solde du compte courant :" + getCheckingBalance());
        System.out.println("Solde du compte d'épargne :" + getSavingsBalance());
    }

    public void displayAccountBalance(String accountName) {
        if (checkingBalance > 0 && savingsBalance > 0) {
            System.out.printf("%s - Checking Balance: $%.2f, Saving Balance: $%.2f\n",
                    accountName, checkingBalance, savingsBalance);
        } else if (checkingBalance > 0) {
            System.out.printf("%s - Checking Balance: $%.2f\n", accountName, checkingBalance);
        } else if (savingsBalance > 0) {
            System.out.printf("%s - Saving Balance: $%.2f\n", accountName, savingsBalance);
        } else {
            System.out.printf("%s - No balance available for this account.\n", accountName);
        }
    }

}
