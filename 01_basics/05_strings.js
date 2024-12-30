const name= "vikrant"
const age =  20
//console.log(name + age + " kawadakar");

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('vikrantk')
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "   vikrant    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "http://vikrant.com/vikrant%20kawadkar"
console.log(url.replace('%20' , '-'))

console.log(url.includes('vikrant'));
