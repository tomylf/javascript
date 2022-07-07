var moyenne = parseInt(prompt("Quelle est ta moyenne au bac ?"));

if (moyenne < 10 ){// si la moyenne est inférieur à 10 
    document.write("Tu est recalé !");// J'affiche qu'il est recalé
}else if((moyenne >= 10) && (moyenne < 12)){ // sinon, si la moyenne est entre 10 et 12
    document.write("Tu passe !"); // J'affiche que le candidat passe
}else if((moyenne >= 12) && (moyenne < 20)){ // sinon, si la moyenne est entre 10 et 12
    document.write("Bravo pour la mention !"); // J'affiche qu'il a une mention
}else { // en cas de saisie ne rentrant pas dans les cas ci-avant
    document.write("Et de 0 à 20 ça donne..."); // Je lui indique qu'il n'a pas saisi ce que l'on lui demandait
}