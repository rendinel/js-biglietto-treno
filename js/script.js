var km = parseInt(prompt('Quanti km vuoi devi fare?'));
var age = parseInt(prompt('Quanti anni hai?'));
var priceKm = parseInt(age * 0.21);
// console.log(priceKmAge)
var priceKmAge = 0;

if (age < 17){
  priceKmAge = priceKm - ((priceKm / 100) * 20)
}

if (age > 65){
  priceKmAge = priceKm - ((priceKm / 100) * 40)
}

if (17 < age < 65){
  priceKmAge = priceKm
}

console.log('Il prezzo é:' + priceKmAge)

var outputContainer = document.getElementById('output');
outputContainer.innerText = 'Il prezzo é ' + priceKmAge ;
