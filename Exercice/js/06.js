var jour = prompt("Quel jour somme-nous ?");
if(jour === "lundi"){
    document.write("Demain nous serons mardi...");
}else if(jour === "mardi"){
    document.write("demain nous serons mercredi")
}else if(jour === "mercredi"){
    document.write("demain nous serons jeudi")
}else if(jour === "jeudi"){
    document.write("demain nous serons vendredi")
}else if(jour === "vendredi"){
    document.write("demain nous serons samedi")
}else if(jour === "samedi"){
    document.write("demain nous serons dimanche")
}else if(jour === "dimanche"){
    document.write("Bon courage ;-)")
}else{
    document.write("jour inconnu...")
}

switch(jour){
    case "lundi":
        console.log("Demain nous serons mardi");
        break;

    case "mardi":
            console.log("Demain nous serons mercredi");
        break;

    case "mercredi":
        console.log("Demain nous serons jeudi");
        break;

    case "jeudi":
            console.log("Demain nous serons vendredi");
        break;
    
    case "vendredi":
        console.log("Demain nous serons samedi");
        break;

    case "samedi":
            console.log("Demain nous serons dimanche");
        break;
    
    case "dimanche":
        console.log("Demain nous serons lundi");
        break;  
        
    default:
        console.log("Désolé, vérifiez l'orthographe et veuillez écrire sans majuscules.");    
}