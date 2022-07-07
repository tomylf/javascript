// alert("yo")

// var nombre = parseInt(prompt("Choisissez un nombre entre 50 et 100 :"));
// // première methode sens inverse
// while(nombre >= 50 && nombre <= 100){
//     alert("le nombre " + nombre + " que vous avez saisie est entre 50 et 100");
//     nombre = prompt("Entrez un nombre entre 50 et 100");
// }


// deuxième methode avec l'inverse 

// var nombre = parseInt(prompt("Choisissez un nombre entre 50 et 100 :"));
// while(nombre < 50 || nombre > 100){
//     alert("Vous avez saisie " + nombre + " n'appartient pas a l'intervalle 50 et 100");
//     nombre = prompt("Entrez un nombre entre 50 et 100")
// }

// troisieme methode avec boucle while et dedans if else
var nombre = parseInt(prompt("Entrez un nombre entre 50 et 100 :"));

while (nombre != 'quitter'){
    if(nombre >= 50 && nombre <= 100){
        alert("le nombre : " + nombre + " que vous avez saisie est compris entre 50 et 100");
        nombre = prompt ("Entrer un nombre 'quitter' pour quitter");
    }else if(nombre < 50 || nombre > 100){
        alert("Vous avez saisie " + nombre + " n'appartient pas a l'intervalle 50 et 100");
        nombre = prompt ("Entrer un nombre 'quitter' pour quitter");
    }else{
        alert("Erreur entrer un nombre conrrecte");
    }
}