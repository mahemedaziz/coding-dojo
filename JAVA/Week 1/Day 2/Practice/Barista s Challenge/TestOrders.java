public class TestOrders {

    public static void main(String[] args) {
        // * Menu Items */
        Item item1 = new Item("drip coffe", 2.0);
        Item item2 = new Item("capuccino", 2.5);
        Item item3 = new Item("ice coffee", 4.0);
        Item item4 = new Item("mocha", 3.8);

        // *Orders */
        Order order1 = new Order();
        Order order2 = new Order();

        // *Create 3 orders using the overloaded constructor
        // * */ to give each a name for the order. */
        Order order3 = new Order("Amen Allah");
        Order order4 = new Order("Eya");
        Order order5 = new Order("Mohamed");

        // *add 2 items to each order and call display after */
        order1.addItem(item4);
        order1.addItem(item4);

        order2.addItem(item1);
        order1.addItem(item2);

        order3.addItem(item4);
        order3.addItem(item3);

        order4.addItem(item1);
        order5.addItem(item3);
        order5.addItem(item3);

        // *Test Order message */
        order5.setReady(true);
        System.out.println(order5.getStatusMessage());

        // *Test Total */
        System.out.println(" total is : $" + order5.getOrderTotal());
        order5.display();
    }

}
