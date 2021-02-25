const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];
console.log("\n***SCRIPT_4********\n");

// afficher la liste des entrepreneurs nés dans les 70's
console.log('Voici la liste les entrepreneurs qui sont nés dans les années 70');
entrepreneurs.forEach (entrepreneur => {
  if (entrepreneur.year >= 1970 && entrepreneur.year <1980) {
    console.log(entrepreneur.first + " " + entrepreneur.last);
  }
});
console.log("\n***********\n");

//afficher les noms et prénoms des entrepreneurs
console.log('Voici un array des entrepreneurs');
array_entrepreneur = [];
entrepreneurs.forEach (entrepreneur => {
  array_entrepreneur.push(entrepreneur.first + " " + entrepreneur.last);
});
console.log(array_entrepreneur);
console.log("\n***********\n");

//afficher l'âge des entrepreneurs aujourd'hui
console.log("Voici l'âge qu'aurait chacun des entrepreneurs : ");
entrepreneurs.forEach (entrepreneur => {
  console.log(entrepreneur.first + " " + entrepreneur.last + ' aurait ' + (2021 - entrepreneur.year) + ' ans.');
});
console.log("\n***********\n");

// trier les entrepreneurs
let entr_sort = entrepreneurs.sort(function compare(a, b) {
  if (a.last < b.last)
     return -1;
  if (a.last > b.last )
     return 1;
  return 0;
});

console.log("\nvoici un tableau qui affiche le tri des entrepreneurs\n");

entr_sort.forEach (entrepreneur => {
  console.log(entrepreneur.first + " " + entrepreneur.last);
})