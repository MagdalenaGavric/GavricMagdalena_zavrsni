// Prvi zadatak
var array1 = ["porodica", "mama", "tata"];
array1[3] = 3;
console.log(array1);

array1.pop(3);
console.log(array1);

array1.shift(0);
console.log(array1);

// Drugi zadatak
var object = {
    gde: "VivifyAcademia",
    sta: "Zavrsni rad",
    ko: "Menu ekipa"
}
object.kada = "02.02.2023.";
console.log(object);

// Treci zadatak
var complexArray = [
   'nizovima',
   {
       key1: 'pristupamo',
       key2: 'ispisati',
       nizUnutarObjekta: ['vezbamo', 'cuvamo']
   },
   {
       key1: 'objektima',
       key2: 'podacima'
   },
   'nacin'
];

console.log("Zadatak u kojem " + complexArray[1].nizUnutarObjekta[0] + " kako da " + complexArray[1].key1 + " podacima sacuvanim u " + complexArray[0] + " i " + complexArray[2].key1 + ". Na ovaj " + complexArray[3] + " omogucavamo da odredjeni string mozemo " + complexArray[1].key2 + " sa razlicitim " + complexArray[2].key2 + ", u zavisnosti koje vrednosti " + complexArray[1].nizUnutarObjekta[1] + " u nizu i/ili objektu.");

// Cetvrti zadatak

var ponudiString;

for (i=1; i <=100; i++) {
    if (i == i%3===0) {
        ponudiString = "Fizz";
    } else if (i == i%7===0) {
        ponudiString = "Buzz";
    } else (i == i%3===0 && i%7===0) {
        ponudiString = "FizzBuzz";
    }
}
console.log(i);

// Peti zadatak
var arrNum = [2, 5, 9, 7]

function sumArrNum(arrNum) {
    var sum = 0;
    for (var clan of arrNum) {
        sum += clan;
    };
    return sum;
};
sumArrNum(arrNum);