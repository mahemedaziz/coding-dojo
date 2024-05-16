import java.util.Random;

public class PuzzleJava {

    public int[] getTenRolls(){
        int [] rolls = new int [10]; //Creation d un tableau pour Stocker les lancers 

        Random rand = new Random(); // Creation d une instance de Random

        //Remplir le tableau avec avec 10 membres aléa entre 1 et 20 inclus
        for ( int i = 0 ; i < 10 ; i++){
            rolls[i] = rand.nextInt(20) + 1 ; //Générer un nombre aléa entre 1 et 20 inclus

        }
        return rolls; //Retourner le tableau rempli
    }

    public  char getRandomLetter(){
        //Creation d un tab contenant les 26 lettres de l alphabet
        char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();

        //*La méthode toCharArray() est une méthode de la classe String en Java. Elle est utilisée pour convertir une chaîne de caractères
        //* */ en un tableau de caractères (char[]). Chaque élément du tableau correspond à un caractère de la chaîne d'origine.

        //Générer un index aléa entre 0 et 25 
        Random rand = new Random();
        int randomIndex = rand.nextInt(26);

        //Extraire la lettre aléa du tableau 
        char randomLetter = alphabet[randomIndex];

        //Renvoyer le lettre aléa
        return randomLetter;
    }

    public String generatePassword(){
        StringBuilder password = new StringBuilder();
        for ( int i = 0 ; i< 8 ; i++){
            password.append(getRandomLetter());
        }
        return password.toString();
        }
    
    public String[] getNewPasswordSet(int length) {
        String[] passwordSet = new String[length]; // Crée un tableau pour stocker les mots de passe

        // Génère un mot de passe aléatoire de huit caractères pour chaque élément du tableau
        for (int i = 0; i < length; i++) {
            passwordSet[i] = generatePassword();
        }

        return passwordSet; // Retourne le tableau de mots de passe générés
    }
}