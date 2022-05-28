debugger

let nombre = prompt("Hola!, Ingresa tu nombre por favor.")

let edad = prompt("hola " + nombre + ", ¿que edad tienes?")

if(edad >= 21) {
    let entradas = parseInt(prompt("¿cuantas entradas gratis deseas?"))
    if(entradas >=2){
    alert("recuerda que si hay un menor de edad entre las " + entradas + " personas, su represente legal debe estar presente")
    }
var cantante = prompt("¿Cual de los siguientes cantastes quieres ver? Juan, Pedro o Luis");
let todook = 1

if(cantante == "Juan" || cantante == "Pedro" || cantante == "Luis"){
    todook = 2 
}

 while (todook != 2) {

    var cantante = prompt("Por favor elige entre los tres shows disponibles: Juan, Pedro o Luis");
    if(cantante == "Juan" || cantante == "Pedro" || cantante == "Luis"){
         todook = 2
        
    }
 }
 for(i= 1; i <=entradas; i++)
 console.log("Generando entrada nro " + i + " para "+ cantante);




alert("Genial generamos tus " + entradas + " entradas"+ " para " + cantante + " las recibirás por correo")
}
else {
    alert("lo sentimos, los tickets deben ser adquiridos por personas mayores de 21 :(")
}   