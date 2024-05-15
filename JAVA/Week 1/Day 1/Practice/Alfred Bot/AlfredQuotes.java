import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    // public String guestGreeting(String name , String dayPeriod) {
    //     // YOUR CODE HERE
    //     return String.format("Good %s, %s. Lovely to see you.", dayPeriod, name);
    // }
    public String guestGreeting(String name) {
        // Determine day period based on current time
        String dayPeriod;
        int hour = new Date().getHours();
        if (hour >= 0 && hour < 12) {
            dayPeriod = "morning";
        } else if (hour >= 12 && hour < 18) {
            dayPeriod = "afternoon";
        } else {
            dayPeriod = "evening";
        }
        return String.format("Good %s, %s. Lovely to see you.", dayPeriod, name);
    }
    
    public String dateAnnouncement() {
        Date date = new Date();
        return String.format("It is currently %s", date);
    }
    
    public String respondBeforeAlexis(String conversation) {
        if (conversation.toLowerCase().contains("alexis")){
            return "Right away, sir. She certainly isn't sophisticated enough for that.";
        }else if (conversation.toLowerCase().contains("alfred")) {
            return "At your service. As you wish, naturally.";
        } else {
            return "Right. And with that I shall retire.";
        }
    }
    
	// NINJA BONUS
	// See the specs to overload the guestGreeting method
        // SENSEI BONUS
        // Write your own AlfredQuote method using any of the String methods you have learned!
}
