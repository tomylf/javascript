// var heure = prompt("Quel heure est-il ?", "saisir une heure");

// if (heure === "14h17m59s"){
//     document.write("Le numero d'heure " + "14h18m0s");
// }else if  (heure === "6h59m59s"){
//     document.write("Le numero d'heure " + "7h0m0s");
// }else if (heure === "23h59m59s"){
//     document.write("Le numero d'heure " + "0h0m0s");
// }
// else{
//     document.write("Votre choix " + heure + " heure inconnue.")
// }


var heure = prompt("Entrez l'heure :");
var minute = prompt("Entrez les minutes :");
var seconde = prompt("Entrez les secondes :");

// on teste les cas d'erreur
if((heure >= 0) && (heure <= 23) && (minute >= 0) && (minute <=59) && (seconde >= 0) && (seconde <= 59)){
    seconde++; // on icrémente les secondes 
    if(seconde === 60){
        //on met les secondes à 0 et passe à la suivante 
        seconde = 0;
        minute++;
        if(minute === 60){ // ===
            minute = 0;
            heure++;

            if(heure === 24){
                // l'heure suivante est minuit
                heure = 0;
            }
        }
    }

    document.write("<h3> Dans une seconde il sera" + heure + "h" + minute + "m" + seconde + "s </h3>");
}
else{
    //heure incorrecte
    document.write("Heure incorrecte")
}
