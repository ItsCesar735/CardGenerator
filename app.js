let cards = ["♦", "♥", "♠", "♣"];
let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const pinta = document.getElementById("pinta");
const numero = document.getElementById("numero");
const pintab = document.getElementById("pintab");

function displayCard() {

    let card = cards[Math.floor(Math.random() * cards.length)];
    let number = numbers[Math.floor(Math.random() * numbers.length)];
    if (card == "♦" || card == "♥"){
        pinta.style.color = "red";
        numero.style.color = "red";
        pintab.style.color = "red";
    }
    else { 
        pinta.style.color = "black";
        numero.style.color = "black";
        pintab.style.color = "black";
    } 
    document.getElementById("pinta").innerHTML = card;
    document.getElementById("numero").innerHTML = number;
    document.getElementById("pintab").innerHTML = card;
}

const boton = document.querySelector(".btn");
boton.addEventListener("click",displayCard);