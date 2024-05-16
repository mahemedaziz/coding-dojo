import java.util.HashMap;

public class TrackListExemple {

    public static void main(String[] args) {
        //Creation de la trackliste 
        HashMap<String, String> trackList = new HashMap<>();

        //Ajout des chansons
        trackList.put("Bohemian Rhapsody", "Is this the real life? Is this just fantasy?");
        trackList.put("Hotel California", "On a dark desert highway, cool wind in my hair");
        trackList.put("Stairway to Heaven", "There's a lady who's sure all that glitters is gold");
        trackList.put("Imagine", "Imagine there's no heaven. It's easy if you try");

        // Sortie des paroles d'une chanson en fonction de son nom
       // Sortie de toutes les chansons avec leurs paroles
        System.out.println("\nToutes les chansons avec leurs paroles :");
        for (String song : trackList.keySet()) {
            System.out.println("Chanson : " + song);
            System.out.println("Paroles : " + trackList.get(song) + "\n");
        };
        System.out.println(trackList.get("Bohemian Rhapsody"));
        System.out.println(trackList.get("Hotel California"));

        System.out.println(trackList.get("Stairway to Heaven"));

        System.out.println(trackList.get("Imagine"));





    }
}