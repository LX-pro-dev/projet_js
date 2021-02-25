const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été empruntés?
console.log("Les livres de la bibliothèque ont-ils tous été emprunté au moins une fois ?");

books.forEach( book => {
  if (book.rented === 0) {
    console.log("Bah non, ils le sont pas tous  (");
  } 
  console.log("\nYes ! Ils le sont tous");
});
console.log("\n***********\n");

// le livre le plus emprunté
let books_sort = books.sort(function compare(a, b) {
  if (a.rented < b.rented)
     return -1;
  if (a.rented > b.rented)
     return 1;
  return 0;
});
let index = books.length;
console.log("Le livre de la bibliothèque le plus emprunté est : " + books[index-1].title);
console.log("\n***********\n");



//Trouve le livre avec l'ID: 873495
books.forEach ( book => {
  if(book.id === 873495) {
    console.log("Le livre avec l'id 873495 est  : " + book.title);
  }
});
console.log("\n***********\n");

//Supprime le livre avec l'ID: 133712
let count = 0;
books.forEach ( book => {
  if(book.id === 133712) {
    books.splice(count,1);
    console.log("Le livre avec l'id 133712 a bien été supprimé");
  }
  count ++;
});
console.log("\n***********\n");

//Trie les livres par ordre alphabétique
console.log("Liste des livres par ordre alphabétique : ");
books_sort = books.sort(function compare(a, b) {
  if (a.title < b.title)
     return -1;
  if (a.title > b.title)
     return 1;
  return 0;
});

books.forEach( book => {
  console.log("- " + book.title);
});