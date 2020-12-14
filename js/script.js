var km = parseInt(prompt('Quanti km vuoi devi fare?'));
var age = parseInt(prompt('Quanti anni hai?'));
var priceKm = parseInt(age * 0.21);
console.log(priceKmAge)
var priceKmAge = 0;

if (age < 17){
  priceKmAge = priceKm - ((pricekm / 100) * 20)
}

if (age > 65){
  priceKmAge = priceKm - ((pricekm / 100) * 40)
}

if (17 < age < 65){
  priceKmAge = pricekm
}

console.log('Il prezzo é:' + pricekmage)

// var outputContainer = document.getElementById('output');
// outputContainer.innerText = km + age + pricekm ;
