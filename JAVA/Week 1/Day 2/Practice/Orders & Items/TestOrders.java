import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
    
        // Menu items
        Item item1  = new Item("Coffee", 2.5);
        Item item2  = new Item("Juice", 4.0);
        Item item3  = new Item("Tea", 1.5);
        Item item4  = new Item("sandwich", 7.5);
        


    
        // Order variables -- order1, order2 etc.
        Order order1 = new Order("Cindhuri");
        Order order2 = new Order("Jimmy");
        Order order3 = new Order("Noah");
        Order order4 = new Order("Sam");

        //* */ Adding items to orders
        order1.addItem(item1);
        order1.addItem(item2);

        order2.addItem(item3);
        order2.addItem(item4);
        order2.addItem(item1);

        order3.addItem(item4);
        order3.addItem(item3);

        order4.addItem(item1);

        // Marking orders as ready
        order2.markAsReady();
        order4.markAsReady();

        // Displaying order details
        displayOrder(order1);
        displayOrder(order2);
        displayOrder(order3);
        displayOrder(order4);

    }

    
        // Application Simulations
        // Use this example code to test various orders' updates
        //! "void" ces méthodes ne retournent aucune valeur. Elles exécutent des actions sur l'objet en modifiant ses attributs internes
        public static void displayOrder(Order order){
            System.out.printf("Name: %s \n", order.getName());
            System.out.printf("Total: %s \n", order.getTotal());
            System.out.printf("Ready: %s \n", order.getReady() ? "Yes" : "No");
            System.out.println("Comandes:");
            for (Item item : order.getItems()) {
                System.out.printf("- %s: $%.2f\n", item.getName(), item.getPrice());
        }
        
    }
}

