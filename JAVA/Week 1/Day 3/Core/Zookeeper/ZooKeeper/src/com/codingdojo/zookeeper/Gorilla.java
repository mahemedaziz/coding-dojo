package com.codingdojo.zookeeper;

public class Gorilla extends Mammal {

	public Gorilla() {
        super();
    }
	
	public void throwSomething() {
        System.out.println("The gorilla has thrown something.");
        energy -= 5;
    }
	
	public void eatBananas() {
        System.out.println("The gorilla is satisfied after eating bananas.");
        energy += 10;
    }
	
	public void climb() {
        System.out.println("The gorilla has climbed a tree.");
        energy -= 10;
    }
}
