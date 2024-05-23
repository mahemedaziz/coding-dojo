public class Phone extends Device {

    @Override
    protected void status() {
        super.status();
        if (battery < 10) {
            System.out.println("*********Batterie critique");
        }
    }

    public void makeCall() {
        System.out.println("You make a call .");
        battery -= 5;
        status();
    }

    // public void playGame() {
    // System.out.println("You play a game .");
    // battery -= 20;
    // status();
    // }

    public void playGame() {
        if (battery < 25) {
            System.out.println("Battery too low to play a game.");
        } else {
            System.out.println("You play a game.");
            battery -= 20;
            status();
        }
    }

    public void charge() {
        System.out.println("You make a charge .");
        battery += 50;
        status();
    }

}
