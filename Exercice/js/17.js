var diese = "";
var rang;

for(rang = 0; rang <= 7; rang++){
    diese += "#";
    document.write(diese + "<br/>");
}


// boucle WHILE
console.log("WHILE");

var ligne = "";
var i = 1;

while (i <= 7){
    ligne = ligne + "#";
    // autre possibilité avec l'opérateur +=
    // ligne += "#"
    console.log(ligne);
    i++;

}