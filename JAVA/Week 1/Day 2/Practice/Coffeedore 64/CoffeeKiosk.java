import java.util.ArrayList;

public class CoffeeKiosk {

    private ArrayList<Item> menu;
    private ArrayList<Order> Order;

    public CoffeeKiosk() {
        this.menu = new ArrayList<Item>();
        this.Order = new ArrayList<Order>();
    }

    public void addMenuItem(String name, double price) {
        Item newItem = new Item(name, price);
        menu.add(newItem);
        newItem.setIndex(menu.indexOf(newItem));
    }

    public void displayMenu() {
        for (Item item : menu) {
            // System.out.println(item.getIndexe() + " " + item.getName() + "--$" +
            // item.getPrice());
            System.out.printf("%d %s -- $%.3f%n", item.getIndexe(), item.getName(), item.getPrice());
        }
    }

    public void newOrder() {

        // Shows the user a message prompt and then sets their input to a variable, name
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();

        // Your code:
        // Create a new order with the given input string
        Order order = new Order(name);
        // Show the user the menu, so they can choose items to add.
        displayMenu();

        // Prompts the user to enter an item number
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();

        // Write a while loop to collect all user's order items
        while (!itemNumber.equals("q")) {

            // Get the item object from the menu, and add the item to the order
            try {
                order.addItem(menu.get(Integer.parseInt(itemNumber)));
            } catch (IndexOutOfBoundsException i) {
                System.out.println("Invalid Selection");
            } catch (NumberFormatException n) {
                System.out.println("Invalid Selection");
            }
            itemNumber = System.console().readLine();
            // Ask them to enter a new item index or q again, and take their input
        }
        // After you have collected their order, print the order details
        order.display();
    }

    public void addMenuItemByInput() {
        while (true) {
            // Demande le nom de l'élément de menu
            System.out.println("Please enter the name of the new menu item (or 'q' to quit):");
            String name = System.console().readLine();
            if (name.equals("q")) {
                break; // Sort de la boucle si l'utilisateur entre "q"
            }

            // Demande le prix de l'élément de menu
            System.out.println("Please enter the price of the new menu item:");
            double price = 0;
            while (true) {
                try {
                    price = Double.parseDouble(System.console().readLine());
                    break; // Sort de la boucle si la conversion est réussie
                } catch (NumberFormatException e) {
                    System.out.println("Invalid price. Please enter a valid number:");
                }
            }

            // Ajoute l'élément de menu
            addMenuItem(name, price);
            System.out.println("Menu item added successfully.");
        }

        // Affiche le menu après que l'utilisateur a terminé d'ajouter des éléments
        displayMenu();
    }

    public static void main(String[] args) {
        CoffeeKiosk kiosk = new CoffeeKiosk();

        // Ajoute des éléments au menu par l'entrée utilisateur
        kiosk.addMenuItemByInput();

        // Crée une nouvelle commande
        kiosk.newOrder();
    }

}
