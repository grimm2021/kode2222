(function () {
  window.addEventListener("load", function () {
    document
      .getElementById("contact-form")
      .addEventListener("submit", validateForm);
  });
})();

function validateForm(event) {
  event.preventDefault();
  console.log("submitted");
  // Hive fat i alle elementer hvor ClassName = need-validation
const elements = .document .getElementsByClassName("need-validation")
console.log(elements)
for (let element of elements){
  const value = element.value.trim()
  const emptyString = ""
  if(value = ""){
    console.log("Du har givet et tomt input")
  }

  console.log(value)
}

// Blot et eksempel til for loops
const games = ["Settlers", "Harry Potter"]

// Standart oldschool for loops
for (let i = 0; i < games.length; i ++){
  console.log(game[i])
}

// Den nye moderne måde "for-of"-loops
for(let game of games)
console.log(game)

// Conditions og if/else sætninger
// Conditions (også kendt som Boolean værdier)
const isAllowed = 28>18
console.log(isAllowed)
if(isAllowed){
  console.log ("Jeg må gerne købe alkohol")
} else {
  console.log ("Jeg må ikke købe alkohol")
}

// else if
const age = 17
if (age > 18) {
  console.log ("Jeg må købe alt alkohol")
} else if (age > 16) {
  console.log ("Jeg må ikke købe alkohol")
}



