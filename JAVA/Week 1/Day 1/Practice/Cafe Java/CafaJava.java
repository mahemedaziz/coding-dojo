public class CafaJava {

    public static void main(String[] args) {
        String generalGreeting = "Welcome to Cafe Java,";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = " , your ordre is ready";
        String displayTotalMessage = " Your total is $";

        double mochaPrice = 3.5 ;
        double dripCoffeePrice = 4.0;
        double lattePrice = 4.5;
        double cappuccinoPrice = 5.0;


        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";



        boolean isReadyOrder1 = true ; 
        boolean isReadyOrder2 = true ; 
        boolean isReadyOrder3 = true ; 
        boolean isReadyOrder4 = true ; 

        System.out.println(generalGreeting + customer1);

        if (isReadyOrder1) {
            System.out.println(generalGreeting + customer1 + readyMessage);
        } else {
            System.out.println(generalGreeting + customer1 + pendingMessage);
        }
        
        if (isReadyOrder4 ) {
            System.out.println(generalGreeting + customer4 + readyMessage);
            System.out.println( displayTotalMessage + cappuccinoPrice);

        } else {
            System.out.println(generalGreeting + customer4 + pendingMessage);
        }

        if (isReadyOrder2 ) {
            System.out.println(generalGreeting + customer2 + readyMessage);
            System.out.println( displayTotalMessage + 2*cappuccinoPrice);

        } else {
            System.out.println(generalGreeting + customer2 + pendingMessage);
        }

        if (isReadyOrder3 ) {
            System.out.println(generalGreeting + customer3 + readyMessage);
            System.out.println( displayTotalMessage + (lattePrice-dripCoffeePrice));

        } else {
            System.out.println(generalGreeting + customer3 + pendingMessage);
        }
    }
}