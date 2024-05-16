import java.util.Scanner;

public class TestPuzzleJava {
    
    public static void main(String[] args) {
        PuzzleJava puzzle = new PuzzleJava();
        int[] rolls = puzzle.getTenRolls();
        for ( int roll : rolls) {
            System.out.println(roll);
        }
        // Tester la méthode getRandomLetter
        System.out.println("Random letter: " + puzzle.getRandomLetter());

        // Tester la méthode generatePassword
        System.out.println("Random Password: " + puzzle.generatePassword());

        // Tester la méthode  NewgeneratePassword
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the length of the password set: ");
        int length = scanner.nextInt();
        scanner.close();

        System.out.println("\nNew password set:");
        String[] passwordSet = puzzle.getNewPasswordSet(length);
        for (String password : passwordSet) {
            System.out.println(password);
        }
    }
}
