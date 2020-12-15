var km = parseInt(prompt('Quanti km vuoi devi fare?'));
var age = parseInt(prompt('Quanti anni hai?'));
var priceKm = km * 0.21;
console.log(priceKm);
var priceKmAge = 0;

if (age < 18){
  priceKmAge = priceKm - ((priceKm / 100) * 20);
} else if (age > 65){
  priceKmAge = priceKm - ((priceKm / 100) * 40);
} else {
  priceKmAge = priceKm;
}

console.log('Il prezzo é:' + priceKmAge);

var outputContainer = document.getElementById('output');
outputContainer.innerText = 'Il prezzo é ' + priceKmAge ;
