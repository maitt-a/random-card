// Asignación de "texto"
let palos = ["♦︎","♥︎","♠︎","♣︎"];
let numeros = ["A","2","3","4","5","6","Q","K"];

// Funcion para obtener un elemento aleatorio
function random(array){
    return array[Math.floor(Math.random()*array.length)];
}

// Colocación de los elementos en la function
let palo = random(palos);
let numero = random(numeros);

// Colocación de los elementos en el HTML con DOM
document.getElementById("top").innerHTML = palo;
document.getElementById("bottom").innerHTML = palo;
document.getElementById("number").innerHTML = numero;

// Colores
if(palo === "♥︎" || palo === "♦︎"){
    document.querySelector(".card").style.color = "red";
} else {
    document.querySelector(".card").style.color = "black";
}
