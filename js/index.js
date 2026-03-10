// Asignación de "texto"
let palos = ["♦︎","♥︎","♠︎","♣︎"];
let numeros = ["A","2","3","4","5","6","Q","K"];

// Funcion para obtener un elemento aleatorio
function randomItem(array){
    return array[Math.floor(Math.random()*array.length)];
}

// Colocación de los elementos en la function
let palo = randomItem(palos);
let numero = randomItem(numeros);

// Colocación de los elementos en el HTML
document.getElementById("top").innerHTML = palo;
document.getElementById("bottom").innerHTML = palo;
document.getElementById("number").innerHTML = numero;

// Colores
if(palo === "♥︎" || palo === "♦︎"){
    document.querySelector(".card").style.color = "red";
}
