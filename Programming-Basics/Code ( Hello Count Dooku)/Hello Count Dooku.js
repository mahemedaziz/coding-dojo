function greet(name) {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const day = now.getDate();
  const month = now.getMonth() + 1; // Les mois en JavaScript commencent à 0
  const year = now.getFullYear();
  var timeOfDay = 0;

  if (name === "Count Dooku") {
      console.log("I'm coming for you, Dooku!");
      return;
  }

  if (hour < 12) {
      timeOfDay = "morning";
  } else if (hour < 18) {
      timeOfDay = "afternoon";
  } else {
      timeOfDay = "evening";
  }

  console.log(`Good ${timeOfDay}, ${name}! Today is ${day}/${month}/${year}, and the time is ${hour}:${minutes}.`);
}

// Exemple d'appel de fonction
greet("Aziz");
greet("Count Dooku");
