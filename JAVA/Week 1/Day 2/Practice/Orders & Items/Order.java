import java.util.ArrayList;

public class Order{
    private String name ;
    private Double total ;
    private Boolean ready ;
    private ArrayList<Item> prix  ;

    public Order (String name) {
        this.name = name;
        this.total = 0.0;
        this.ready = false;
        this.prix  = new ArrayList<>();
    }
    public String getName (){
        return name;
    }
    public Double getTotal (){
        return total;
    }
    public Boolean getReady (){
        return ready;
    }
    public ArrayList<Item> getItems (){
        return prix;
    }
    
    public void addItem (Item item) {
        prix.add(item);
        total += item.getPrice();
    }
    public void markAsReady(){
        ready = true;
    }
    
}