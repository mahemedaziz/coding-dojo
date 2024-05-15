import java.util.ArrayList;

public class CafeUtil {

    // public int getStreakGoal(){
    //     int sum = 0 ;
    //     for (int i=1 ; i <=10 ; i++){
    //         sum += i;
    //     }
    //     return sum;
    // }

    //*Bonus Ninja  */
    public int getStreakGoal(int numWeeks) {
        int sum = 0;
        for (int i = 1; i <= numWeeks; i++) {
            sum += i;
        }
        return sum;
    }

    //*prix double */
    public double getOrderTotal (double[] prices){
        double total = 0;
        for (double price : prices) {
            total +=price;
        }
        return total;
    }

    //*Display Menu */
    public void displayMenu(ArrayList<String> menuItems){
        for (int i = 0 ; i < menuItems.size();i++){
            System.out.println(i + " " + menuItems.get(i));
        }
    }

    // //*Clients*/
    // public void addCustomer(ArrayList<String> clients) {
    //     System.out.println("Please enter your name: ");
    //     String username = System.console().readLine();
    //     System.out.println("Hello " + username +  " !");
    //     int numCustomers = clients.size();
    //     System.out.println(("There are " + numCustomers + " people in front of you"));
    //     clients.add(username);
    //     System.out.println(clients);
    //     }
    public void addCustomers(ArrayList<String> customers) {
        boolean addingCustomers = true;
        while (addingCustomers) {
            System.out.println("Please enter a customer's name (type 'q' to quit): ");
            String name = System.console().readLine();
            if (name.equals("q")) {
                addingCustomers = false;
            } else {
                customers.add(name);
            }
        }
        System.out.println("Customers added: " + customers);
    }


}