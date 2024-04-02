class Ninja{
    constructor(name , health , speed , strength ){
        this.name = name;
        this.health = health ||90 ;
        this.speed = speed||3 ;
        this.strength = strength||3;
    }
    sayName(){
        console.log(`the name of the Ninja ist ${ this.name}.`);
    }

    showStats(){
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }

    drinkSake(){
        this.health += 10
        console.log (`${this.name} drink a Sake  and has now ${this.health} health .`)
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name,200,10,10);
        this.wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmer can do in two month.");
    }
}

const SuperSensei = new Sensei("Master Splinter");
SuperSensei.speakWisdom();
SuperSensei.showStats();

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
