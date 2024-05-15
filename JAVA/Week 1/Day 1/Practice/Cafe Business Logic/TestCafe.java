import java.util.ArrayList;
import java.util.Arrays;
public class TestCafe {
    public static void main(String[] args) {
        
    /* 
    You will need add 1 line to this file to create an instance 
    of the CafeUtil class. 
    Hint: it will need to correspond with the variable name used below..
    */
    CafeUtil cafeUtil = new CafeUtil();
    	
        //! ============ App Test Cases ============= */
    
        System.out.println("\n----- Streak Goal Test -----");
        // System.out.printf("Purchases needed by week 10: %s \n\n", cafeUtil.getStreakGoal());
        
        // //*Bonus Ninja  */
         // Test avec 5 semaines
        int streakGoal15Weeks = cafeUtil.getStreakGoal(15);
        System.out.printf("Purchases needed by week 15: %s \n", streakGoal15Weeks); 
         // Test avec un nombre différent de semaines
        int streakGoal20Weeks = cafeUtil.getStreakGoal(20);
        System.out.printf("Purchases needed by week 20: %s \n", streakGoal20Weeks);


        //* prix  */
        System.out.println("----- Order Total Test-----");
        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        System.out.printf("Order total: %s \n\n",cafeUtil.getOrderTotal(lineItems));
        

        //* Menu  */
        System.out.println("----- Display Menu Test-----");
        ArrayList<String> menu = new ArrayList<String>();
        menu.add("drip coffee");
        menu.add("cappuccino");
        menu.add("latte");
        menu.add("mocha");
        cafeUtil.displayMenu(menu);

        //* Client  */
        // System.out.println("\n----- Add Customer Test-----");
        // ArrayList<String> clients = new ArrayList<String>();
        // cafeUtil.addCustomer(clients);
        // //* */ --- Test 4 times ---
        // for (int i = 0; i < 4; i++) {
        //     cafeUtil.addCustomer(clients);
        //     System.out.println("\n");
        // }
        ArrayList<String> customers = new ArrayList<>();
        cafeUtil.addCustomers(customers);
        int numCustomers = customers.size();
        System.out.println("Nombre de clients : " + numCustomers);
        System.out.println("Liste des clients : ");
        for (String customer : customers) {
        System.out.println(customer);
        }
    }
}

