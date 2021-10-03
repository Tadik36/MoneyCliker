let cash = document.getElementById("cookie");
let counter = document.getElementById("counter");
let Piggybank = document.getElementById("autoclicker");
let costclick1 = document.getElementById("costautoclick");
let kolik = document.getElementById("kolik");
let multiplierButton = document.getElementById("multiplier");
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

let cursor = 0;
let money = 0;
let price = 10;
let interval;
let cost = 10;
let cena = 10;
let cur = 0;


const change = () => {
    money++;
    counter.innerText = `Money: ${money}`;
};

cash.onclick = change;

const Piggybanks= () => {
    if (money >= cost) {
        money -= cost;
        cost = cost +5;
        counter.innerText =`Cookies: ${money}`;
        interval=setInterval(change, 5000);
        Piggybank.style.display = "block";
        price = cena;
        cena = cena +5;
        costclick1.innerText = `cena: ${cena}`;
        cursor = cur;
        cur++;
        kolik.innerText =`${cur}`;
    }
}

Piggybank.onclick = Piggybanks;

let bookmaker = document.getElementById("grandma");
let costclick2 = document.getElementById("costautoclick2");
let kolik2 = document.getElementById("kolik2");

let grma = 0;
let grmo = 0;
let price2 = 300;
let cena2 = 300;
let cost2 = 300;


const bookmakers = () => {
    if (money >= cost2) {
        money -= cost2;
        cost2 = cost2 + 100;
        counter.innerText = `Money: ${money}`;
        interval = setInterval(change, 4000);
        bookmaker.style.display = "block";
        price2 = cena2;
        cena2 = cena2 +100;
        costclick2.innerText = `Cena: ${cena2}`;
        grma = grmo;
        grmo++;
        kolik2.innerText = `${grmo}`;
    }
}
bookmaker.onclick = bookmakers;



let Bankacc = document.getElementById("farm");
let costclick3 = document.getElementById("costautoclick3");
let kolik3 = document.getElementById("kolik3");

let frma = 0;
let frmo = 0;
let price3 = 2000;
let cena3 = 2000;
let cost3 = 2000;

const Bankaccount = () => {
    if (money >= cost3) {
        money -= cost3;
        cost3 = cost3 + 1000;
        counter.innerText = `Money: ${money}`;
        interval = setInterval(change, 2000);
        Bankacc.style.display = "block";
        price3 = cena3;
        cena3 = cena3 +1000;
        costclick3.innerText = `Cena: ${cena3}`;
        frma = frmo;
        frmo++;
        kolik3.innerText = `${frmo}`;
    }
}
Bankacc.onclick = Bankaccount;



let BitcoinAcc = document.getElementById("tovarna");
let costclick4 = document.getElementById("costautoclick4");
let kolik4 = document.getElementById("kolik4");

let mina = 0;
let mino = 0;
let price4 = 10000;
let cena4 = 10000;
let cost4 = 10000;

const BitcoinAccount = () => {
    if (money >= cost4) {
        money -= cost4;
        cost4 = cost4 + 5000;
        counter.innerText = `Money: ${money}`;
        interval = setInterval(change, 1500);
        BitcoinAcc.style.display = "block";
        price4 = cena4;
        cena4 = cena4 +5000;
        costclick4.innerText = `Cena: ${cena4}`;
        mina = mino;
        mino++;
        kolik4.innerText = `${mino}`;
    }
}
BitcoinAcc.onclick = BitcoinAccount;


let Stock = document.getElementById("click");
let costclick5 = document.getElementById("costautoclick5");
let kolik5 = document.getElementById("kolik5")


let ckl =0;
let ckla =0;
let price5 = 500;
let cena5 = 500;
let cost5 = 500;

const Stocks = () => {
if (money >= cost5){
    money -= cost5;
    cost5 = cost5 + 250;
    counter.innerText = `Money: ${money}`;
    interval =setInterval(change,3000)
    Stock.style.display = "block";
    price5 = cena5;
    cena5 = cena5 +250;
    costclick5.innerText = `Cena: ${cena5}`;
    ckl = ckla;
    ckla++;
    kolik5.innerText = `${ckla}`;
    }
}
Stock.onclick = Stocks;

let price6 = 100;
let multiplicateur = 1;

       multiplierButton.addEventListener("click", function augmenteMultiplicateur() {
           if (money >= price6) {
               money -= price6;
               counter.innerText = `Money: ${money}`;
               multiplierButton.style.display = "block";
               price6 *= 3;
               console.log(price6);
               multiplicateur++;
               multiplierButton.textContent = "Multiplier:x" + multiplicateur + " Cena:" + price6;
           }
       });
cash.addEventListener("click", function() {
    if (multiplicateur === 1 && multiplicateur != 0) {
        money = (money + 0) * multiplicateur;
    } else if (multiplicateur >= 1) {
        money = money + multiplicateur;
        money--;
    }

});

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
