public class TestOrders {

    public static void main(String[] args) {
        CoffeeKiosk coffeeKiosk = new CoffeeKiosk();

        coffeeKiosk.addMenuItem("banana", 2.00);
        coffeeKiosk.addMenuItem("coffee", 1.5);
        coffeeKiosk.addMenuItem("latte", 4.5);
        coffeeKiosk.addMenuItem("capuccino", 3.0);
        coffeeKiosk.addMenuItem("muffin", 4.0);

        coffeeKiosk.newOrder();
        // coffeeKiosk.addMenuItemByInput();

        System.out.println("Initial Menu:");
        // coffeeKiosk.displayMenu();

        // Permet à l'utilisateur d'ajouter des éléments au menu
        coffeeKiosk.addMenuItemByInput();

        // Crée une nouvelle commande
        coffeeKiosk.newOrder();
    }

}
