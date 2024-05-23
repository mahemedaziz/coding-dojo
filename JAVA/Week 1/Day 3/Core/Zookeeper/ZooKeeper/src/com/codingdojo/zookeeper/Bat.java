package com.codingdojo.zookeeper;

public class Bat extends Mammal {
	
	public Bat() {
        this.energy = 300;
    }
	
	public void fly() {
        System.out.println("The bat is flying.");
        energy -= 50;
    }
	
	  public void eatHumans() {
	        System.out.println("The bat is satisfied after eating humans.");
	        energy += 25;
	    }
	  
	  public void attackTown() {
	        System.out.println("The bat is attacking the town.");
	        energy -= 100;
	    }

}
