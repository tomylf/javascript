// alert("yadaf");

// LES BOUCLES


// -- La boucle FOR
/*
for ( 3 arguments ){
    ... code ...
}
// */

// // 1. initialise un compteur à partir de combien je compte ( par défaut le compteur est variable 'i')
// // 2. la condition à vérifier qui doit donc être VRAI (TRUE)
// // 3. le 'pas' d'incrémentation (combien j'ajoute à chaque tour, généralement 1 donc i++)

// for (var i = 1; i <= 10; i+=2){
//     document.write("<p>Instruction exécutée : " + i + "</p>");
// }


// // -- La boucle WHILE (tant que)
// // très utilisée quand on ne connait pas le nombre de tours de boucle à l'avance
// var j = 1;
// while(j <= 10){
//     document.write("<hr /> <p>Instruction exécutée : " + j + "</p>")
//     //
//     // j++;
//     // j = j + 1;
//     // ou
//     j += 1;
// }


// // ------------------------------------------


// /* EXERCICE 

// -------------------------------------------/
// J'ai 1000€ sur mon compte 
// chaque mois j'ajoute 50€
// combien de temp ne faut-il pour avoir 2000€ sur mon compte ?
// -------------------------------------------*/

// for (var compte = 1000; compte <= 2000; compte+=50){
//     document.write("<p>Mois : " + compte + "</p>");
//     // 1an et 8mois
// }

var compte = 1000;
var temps = 0;
while(compte < 2000){
       compte += 50;
       temps++;
}
document.write("<h3> Argent sur mon compte : " + compte + "</h3>");
document.write("<h3> Jusqu'à 2000€, il me faut : " + temps + "mois </h3>");
    


var tps = 0;

for ( var mesSous = 1000; mesSous < 2000; mesSous += 50){
    document.write("<h3>Le mois suivant j'ai : " + mesSous + "</h3>");
    tps++
}
document.write("<h3>Il aura fallu " + tps + " mois.</h3>");