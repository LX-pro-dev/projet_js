function question(str) {
  let long = str.length;
  if (str.charAt(long-1) === '?') {
    return true;
  }
  else {
    return false;
  }
}

function removePunctuations(str) {
  return str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"");
}

function yell(str) {
  var re = new RegExp("^[A-Z]+$", "g");
  if(!re.test(removePunctuations(str))) return false;
  else return true;
}

function fortnite (str) {
  let tab = [];
  tab = str.split(' ');
  console.log(tab.length);
  let j = 0;
  for (let i = 0; i < tab.length; i++) {
    console.log(tab[i]);
    if(tab[i].toLowerCase() === 'fortnite') {
      j++
    }
  }
  if(j > 0) return true;
  else return false;
}

function empty(str) {
  if(str === '') return true;
  else return false;
}

function acneBot() {
  let str = prompt('Tape ton message à ton ado :')
  if(empty(str)) console.log("t'es en PLS ?");
  else {
    if(fortnite(str)) console.log("on s' fait une partie soum-soum ?");
    else {
      if(question(str)) console.log("Ouais Ouais...");
      else if(yell(str)) console.log("Pwa, calme-toi...");
      else console.log("balek.");
    }
  }
}

acneBot();