var mois = parseInt(prompt("Quel mois choisissez-vous ?", "saisir un chiffre entre 1 et 12"));

if (mois === 2){ // si on a choisi février => chiffre 2
    document.write("Le mois numéro " + mois + " Fait 28 jours.");
}else if ((mois === 4) || (mois == 6) || (mois === 9) || (mois == 11)){ 
    document.write("Le mois numéro " + mois + " Fait 30 jours.");
}else if ((mois === 1) || (mois == 3) || (mois === 5) || (mois == 7) || (mois == 8) || (mois == 10) || (mois == 12)){ 
    document.write("Le mois numéro " + mois + " Fait 31 jours.");
}else{
    document.write("Votre choix " + mois + " n'est pas dans le calendrier.")
}

