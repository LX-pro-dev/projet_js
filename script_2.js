let number = prompt('De quel nombre veux-tu calculer la factorielle ?');
let num = parseInt(number, 10);
let result = 1;
for(let i= 1 ; i <= num; i++ ) {
  result *= i;
}
console.log("Le résultat est : " + result);