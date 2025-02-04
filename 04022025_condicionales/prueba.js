const prompt=require("prompt-sync")({sigint:true});
    let edad=parseInt(prompt("Ingresa tu edad: "));    
    if(edad>=18){
        alert("Eres mayor de edad.");
    }
    else{
        alert("Eres menor de edad.");
    }
