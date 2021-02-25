let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
//let num = parseInt(number, 10);
for(let i= 1 ; i <= number; i++ ) {
  let hashtag = '#';
  let space = '' ;
  for(let j=0 ; j < (number - i) ; j ++) {
    space += " "; 
  }
  for(let k = 1 ; k < i ; k++) {
    hashtag += '#';
  }
  console.log(space + hashtag);
}

