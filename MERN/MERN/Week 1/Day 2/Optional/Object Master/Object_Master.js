const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] }, 
    { "id": 133, "name": "Eevee",      "types": ["normal"] },   
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },    
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] },
]);
// //*For example we could create a list of pokémon that have names that start with the letter "B"
// const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
// console.log(bListPkmn)

// //*we wanted to return an array of just the ids, we could use something like this
// const pkmnIds = pokémon.map( p => p.id )
// console.log(pkmnIds);

// //*an array of pokémon objects where the id is evenly divisible by 3
// const pkmnIdseven = pokémon.filter(pokémon => pokémon.id % 3===0)
// console.log(pkmnIdseven)

//*an array of pokémon objects that are "fire" type
// const pkmnFireType = pokémon.filter(pokémon => pokémon.types == "fire") 
// console.log(pkmnFireType)

// //*an array of pokémon objects that have more than one type
// const pkmnMoreTypes = pokémon.filter(pokémon => pokémon.types.length > 1 );
// console.log(pkmnMoreTypes);

// //*an array with just the names of the pokémon
// const pkmnJustName = pokémon.map(pokémon => pokémon.name)
// console.log(pkmnJustName);

// //*an array with just the names of pokémon with an id greater than 99
// const  pkmnGreaterThan99 = pokémon.filter(pokémon => pokémon.id >99).map(pokémon=>pokémon.name);
// console.log(pkmnGreaterThan99);

//*an array with just the names of the pokémon whose only type is poison
// const pkmnPoiser = pokémon.filter(pokémon => pokémon.types == "poison").map(pokémon=>pokémon.name);
// console.log(pkmnPoiser);

//*an array containing just the first type of all the pokémon whose second type is "flying"
// const pkmnFlying = pokémon.filter(pokémon => pokémon.types[1]=="flying").map(pokémon => pokémon.types[0]);
// console.log(pkmnFlying);

//*a count of the number of pokémon that are "normal" type
// const pkmnNormalCount = pokémon.reduce((count , pokémon) => {
//     if (pokémon.types.includes("normal")) {
//         return count + 1;
//     }
//     return count;
// }, 0);
// console.log(pkmnNormalCount);

// const pkmnNormalCount2 = pokémon.filter(pokemon => pokemon.types.includes("normal")).length.map(pokémon=>pokémon.name);

// console.log(pkmnNormalCount2);

const pkmnNormal = pokémon.filter(pokemon => pokemon.types.includes("normal")).map(pokemon => {
    return { id: pokemon.id, name: pokemon.name };
});

console.log(pkmnNormal);
