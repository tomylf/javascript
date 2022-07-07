// Solution utilisant une série de if /else 

for (var nombre = 1; nombre <= 100; nombre++){
    if((nombre % 3 === 0) && (nombre % 5 === 0)){
        console.log("Fizzbuzz");
    }else if(nombre % 3 === 0){
        console.log("Fizz");
    }else if(nombre % 3 === 0){
        console.log("Fizz");
    }else{
        console.log(nombre);
    }
}