
for (var i = 1; i <= 10; i++){
        if (i % 2 === 0){
            document.write(i + " est pair ")
        }else{
            document.write("<h3> " + i + " est impair</h3>")
        }
    }

document.write("<hr/>");


var chiffre = parseInt(prompt("Choisir un nombre entier"));
var chiffreMax = (chiffre + 10);
while(chiffre <= chiffreMax){
    if(chiffre % 2 === 0){
        document.write("<h3>" + chiffre + " est pair </h3>");
    }else{
        document.write("<h3>" + chiffre + " est impair </h3>");
    }
    chiffre++
}


document.write("<hr />");




var nbUser = parseInt(prompt("Ton chiffre ?"));

var nbUserMax = (nbUser + 10);

for(var tour = nbUser; tour <= nbUserMax; tour++){
    if(tour % 2 === 0){
        document.write("<h3>" + tour + " est pair </h3>"); 
    }else{
        document.write("<h3>" + tour + " est impair </h3>");
    }
}
