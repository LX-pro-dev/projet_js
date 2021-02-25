let codon1 = "CCGUCGUUGCGCUACAGC";
let codon2 = "CCUCGCCGGUACUUCUCG";

  //retourne la protéine en fonction de 3 nucléotides
 function acide_aminee (str) {
  if(str === 'UCU' || str === 'UCC' || str === 'UCA' 
    || str === 'UCG' || str === 'AGU' || str === 'AGC') {
      return 'Sérine';
  }
  else if (str === 'CCU' || str === 'CCC' || str === 'CCA' || str === 'CCG') {
    return 'Proline';
  }
  else if ( str === 'UUA' || str === 'UUG') {
    return 'Leucine';
  }
  else if ( str === 'UUU' || str === 'UUC') {
    return 'Phénylalanine';
  }
  else if(str === 'CGU' || str === 'CGC' || str === 'CGA' 
    || str === 'AGA' || str === 'AGA' || str === 'CGG') {
      return 'Arginine';
  }
  else if ( str === 'UAU' || str === 'UAC') {
    return 'Tyrosine';
  }
}
//retourne la chaine de nucléotides par 3 puis leur équivalent en protéine
function tabOfThree(codon) {
  let long = codon.length;
  let tab = [];
  let tab2 = [];
  for(let i = 0; i <= long ; i+=3){
    tab.push(acide_aminee(codon.slice(i,i+3)));

    tab2.push(codon.slice(i,i+3));
  }
   console.log("\n " + tab2.join("-"));
   console.log(tab.join("-"));
}

tabOfThree(codon1);
console.log("\n**********\n");
tabOfThree(codon2);
