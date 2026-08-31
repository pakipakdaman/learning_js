const name = "parsa";
let age = 23;
const islearningjs= true;

console.log(name);
console.log(age);
console.log(islearningjs);



function sum(a,b){return a + b;}      
const result = sum(5,10);
console.log(result);


function IsEven(number2){return number2 % 2 === 0}
const result2 = IsEven(10)
console.log(result2)



const number3 = 75;
if (number3 >= 90){
        console.log("excellent")
} else if (number3 >= 70){
        console.log("good")
} else{
        console.log("keeplearning")
}

const fruits = ["apple","orange","blueberry"];
console.log(fruits[0])
console.log(fruits)
fruits.push("banana")
console.log(fruits)
console.log(fruits.length)
for(const fruit of fruits){
        console.log(fruit);
}
for (let i=1; i<=5; i++){
        console.log(i);
}

const car = {
        brand : "toyota",
        model : "x12",
        year : 2024,
        describe(){
                console.log(this.model);
        }
}
console.log(car.brand)
console.log(car)
car["IsElectric"] = true;
console.log(car.IsElectric);
car.describe();

const title = document.querySelector("#title");
console.log(title);
let showingparsa = false;
setInterval(() => {
        if (showingparsa){
                title.textContent = "Hello World";
        }else{
                title.textContent = "Hello parsa"
        }
        
}, 1000);   
