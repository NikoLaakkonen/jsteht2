var input = require("readline-sync");

// luettelo henkilöistä ja nimistä
let henkilot = [
  { nimi: "roope", puh: "040345612" },
  { nimi: "kalle", puh: "050382742" },
  { nimi: "iines", puh: "040827692" },
];

//uuden henkilön lisäys listaan
let uusihenkilo = {
  nimi: input.question("Lisaa uusi nimi: "),
  puh: input.question("Lisaa uusi numero: "),
};
henkilot.push(uusihenkilo);

var nimikysy = input.question("Kenen puhelinnumeron haluat?: ");

//funktio joka etsii tietyn henkilön nimen perustaalla numeron ja palauttaa sen
function Etsinumero(henkilot) {
  for (var i = 0; i < henkilot.length; i++) {
    if (henkilot[i].nimi == nimikysy)
      return "Puhelinnumero: " + henkilot[i].puh;
  }
}

console.log(Etsinumero(henkilot));
