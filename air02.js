#! node

// Script qui supprime les caractères identiques adjacents

//Gestion d'erreur
if (process.argv.length !== 3) {
  console.log(
    'Veuillez indiquer une seule phrase au script. Exemple : node air02.js "J\'aime le chocolat,,    avec des crevettes !!!!"'
  );
  return;
}

//Parsing
let phrase = process.argv;
phrase.splice(0, 2);
phrase = phrase.toString();
//console.log(phrase);

//Function / Résolution du problème

const recurrence = (phrase) => {
  let c = 0;
  const character = [
    " ",
    ",",
    ";",
    ":",
    "!",
    "?",
    ".",
    "/",
    "§",
    "-",
    "_",
    "%",
    "~",
    "#",
    "@",
    "*",
    "-",
    "+",
    ">",
    "<",
    "'",
  ];
  while (c !== phrase.length) {
    let length = phrase.length;
    for (let x = 0; x < character.length; x++) {
      if (phrase[c] === character[x] && phrase[c] === phrase[c + 1]) {
        phrase = phrase.slice(0, c) + phrase.slice(c + 1, length);
        length = phrase.length;
        c -= 1;
      }
    }
    x = 0;
    c += 1;
  }
  return phrase;
};

//Afichage

console.log(recurrence(phrase));
return recurrence(phrase);
