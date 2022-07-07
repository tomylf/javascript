// alert("yo")

// var choix = parseInt(prompt("Choisissez un chiffre"));

// for(var i = 1; i <= 10; i++){
//     var resultat = choix * i;
//     document.write(choix + " x " + i + " = " + resultat + "<br/>");
// }




// var choix = prompt("choisis un chiffre : ");

// if((choix >= 2) && (choix <= 9)){
//     for(i = 1; i <= 10; i++){
//         var resultat = choix * i;
//         document.write(choix + " x " + i + " = " + resultat + "<br/>");
//     }
// }else{
//     document.write("<h4> Le chiffre doit être entre 2 et 9 :</h4>")
// }





var choix = prompt("Choisis un chiffre entre 2 et 9 : ");

while((choix > 1) || (choix < 10)){
  if((choix >= 2) && (choix <= 9)){

    for(i = 1; i <= 10; i++){
    var resultat = choix * i;
    document.write(choix + " x " + i + " = " + resultat + "<br/>");   


    }
    break;
  }else{
        choix = Number(prompt("Entrez un nombre entre 2 et 9 :"));
  }
}