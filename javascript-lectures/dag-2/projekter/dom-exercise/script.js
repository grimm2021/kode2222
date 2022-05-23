(function () {
  window.addEventListener("load", () => {
    console.log("Index.js was invoked");
    const h1Element = document.getElementById("title")
    console.log(h1Element.innterText)
    h1Element.innerText = "Her en ny titel"

    const h3Elements = document.getElementsByTagName("h3")
    console.log(h3Elements)

    const specificH3 = document.querySelector(".container h3")
    console.log(specificH3.innerText)
  });
})();

function clicked(){
console.log("Jeg er blevet klikket på")
}