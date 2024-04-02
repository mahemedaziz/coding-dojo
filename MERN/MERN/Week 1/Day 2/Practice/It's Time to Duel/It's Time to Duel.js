class Unit {
    constructor(name,cost,power,resilience) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        if (target instanceof Unit) {
            target.resilience -= this.power; // Réduit la résilience de la cible par la puissance de l'attaquant
            if (target.resilience <= 0) {
                console.log(`${target.name} a été détruit !`);
            }
        } else {
            throw new Error("La cible doit être une unité !");
        }
    }
}

class Effect {
    constructor(name,cost,text,stat,magnitud){
        this.name = name;
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitud = magnitud;
    }

    apply(target) {
        if (target instanceof Unit) {
            if (this.stat === "power") {
                target.power += this.magnitud; // Augmente la puissance de la cible
            } else if (this.stat === "resilience") {
                target.resilience += this.magnitud; // Augmente la résilience de la cible
            }
        } else {
            throw new Error("La cible doit être une unité !");
        }
    }
}

// Création des unités
let redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
let blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Effect Cards
let HardAlgorithm = new Effect("Red Belt Ninja", 3 , "increase target's resilience by 3", "resilience", 3);
let UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1 , "reduce target's resilience by 2", "resilience", -2);
let PairProgramming = new Effect("Pair Programming", 3 , "increase target's power by 2", "power", 2);

console.log("Tour 1 :");
console.log("Création de Red Belt Ninja");
console.log(`Red Belt Ninja - Résilience : ${redBeltNinja.resilience}`);
console.log("Création de Hard Algorithm et application sur Red Belt Ninja");
HardAlgorithm.apply(redBeltNinja);
console.log(`Red Belt Ninja - Résilience : ${redBeltNinja.resilience}`);
console.log("**********************");

console.log("Création de Black Belt Ninja");
console.log(`Red Belt Ninja - Résilience : ${redBeltNinja.resilience}`);
console.log("Création de Unhandled Promise Rejection et application sur Red Belt Ninja");
UnhandledPromiseRejection.apply(redBeltNinja);
console.log(`Red Belt Ninja - Résilience : ${redBeltNinja.resilience}`);
console.log("**********************");

console.log("Red Belt Ninja");
console.log(`Red Belt Ninja - Puissance : ${redBeltNinja.power}`);
console.log("Création de Pair Programming et application sur Red Belt Ninja");
PairProgramming.apply(redBeltNinja);
console.log(`Red Belt Ninja - Puissance : ${redBeltNinja.power}`);
console.log("**********************");

console.log("Red Belt Ninja attaque Black Belt Ninja");
redBeltNinja.attack(blackBeltNinja);
console.log(`Red Belt Ninja - Puissance : ${redBeltNinja.power}, Résilience : ${redBeltNinja.resilience}`);
console.log(`Black Belt Ninja - Puissance : ${blackBeltNinja.power}, Résilience : ${blackBeltNinja.resilience}`);

