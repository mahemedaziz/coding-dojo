// on a besoin d'uen boucle içi parce aue l'appareil sort un bonbon chaque 2 milles
// le point de depart et le 0 (i=0)
// la boucle s'arrete lorsque i == 6 milles
// chaque 2 milles l'appareil donne 1 bonbon 
// for (var i = 0 ; i <= 6 ;i++ )

function Pops_Out_Candy (loT){
  var sum = 0;
  for (var i=0 ; i<=6 ; i+=2){
    sum = sum + 1 ;
  }
  return sum ;
}

// Ninja Bonus (loop where the runner only gets a piece of candy every 2 miles AND if they were going faster than 5.5 miles per hour.)
function Pops_Out_Candy (loT){
  var distance = 0;
  var vitesse = 0 ; 
  var sum = 0;
  while (distance < 6){
    if (distance %2 == 0 && vitesse <5.5 ) {
      sum = sum + 1 ;
    }
    distance = distance + 1;
  }
  return sum ;
}
