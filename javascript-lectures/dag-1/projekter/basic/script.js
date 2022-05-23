console.log("Jeg er kørt")

// Strings 
const myName = "Ida"
const lastName = "Thorsen"
const email ="ida.heidensleben@hotmail.com"

const fullName = "Ida Heidensleben THorsen"

const messege ="Hej " + 
    myName +
     ", velkommen til og tak fordi du har skrevet dig op til mit nyhedsbrev, håber du kommer til at nyde mit indhold."

const wlcome = `Hej ${myName}, velkommen`

console.log(myName + " " + lastName + " " + email)
console.log(fullName)
console.log(messege)

// Numbers
const height = 1.8
const weight = 89

const bmi = weight / (height*height)
console.log(bmi)

const su = 6000
const usd = 6.55
const eur = 7.45

console.log  ("SU i usd " + su / usd)
console.log ("SU i eur " + su /eur)

// Booleans
const doesLikeCats = false
const isJavaScriptNice = true

const result = 3.5 < 4
console.log(result)

const iLikeCats = true
const catsCanFly = false
const iDoNotLikeDogs = false

const age = 21
const isAllowed = age > 18
console.log(isAllowed)

// objects
const adresse = {
    name: myName,
    vej: 'Brobyvej',
    nummer: 1, 
}

console.log(adresse.nummer)
console.log(adresse.vej)

adresse.postnr = 2740
console.log (adresse)

const object = {
    name: myName + ' Heidensleben',
    lastname: lastName, 
    age: age,
    email: email,
    uddannelse: 'Multimediedesign',
}

console.log(object)

// Arrays

const games = ["dota2", "apex"]
console.log (games[1])

const flow = [
    "Flow1", 
    "Flow2", 
    "Flow3"]
console.log(flow[1])

const serier = [
    "Peaky Blinders", 
    "Greys Anatomy"]
console.log(serier[0])



// Funktioner

function bmiCalculate(height, weight){
    const bmi = weight / (height*height)
    console.log(bmi)
}

bmiCalculate(1.80, 89)


function exchangeCalculater(rate, amount){
    const newAmount =amount / rate
    console.log(newAmount)
}

exchangeCalculater(6.55, 6000)
exchangeCalculater(7.45, 6000)


